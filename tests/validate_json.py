# # Validate terms lists
#
# This python script extends json schema validation (`jsonschema --instance terms.json terms.schema.json`) to ensure:
#
# 1. slug: unique
# 2. title: unique
# 3. related: no references to non-existent slugs
# 4. related: no self-references
# 5. description: checks for broken links

# Import libraries
import json
import urllib.request
from urlextract import URLExtract

# Define custom functions
def check_url_live(url):
    # Requires valid user agent for certain website
    req = urllib.request.Request(
        url,
        data=None,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36"
        },
    )
    try:
        res = urllib.request.urlopen(req)
        if res.code == 200:
            return
        else:
            raise Exception(f"URL check failed for {url} with response {res.code}")
    except:
        raise Exception(f"URL check failed for {url}")


# Load terms
try:
    f = open("../data/terms.json")
except:
    raise Exception("Unable to open terms.json")

try:
    terms = json.load(f)
except:
    raise Exception("Unable to parse terms.json as valid json")

# Check for unique termCodes

termCodes = []
for term in terms["terms"]:
    if term["termCode"] in termCodes:
        raise Exception(f"Duplicate termCode found for \"{term['termCode']}\"")
    else:
        termCodes.append(term["termCode"])

print(f"{len(termCodes)} unique termCode(s) in database")

# Check for unique names

names = []
for term in terms["terms"]:
    if term["name"] in names:
        raise Exception(f"Duplicate name found for \"{term['name']}\"")
    else:
        names.append(term["name"])

print(f"{len(names)} unique name(s) in database")

# Check for orphaned slugs

for term in terms["terms"]:
    related = term["related"]
    for related_termCode in related:
        if related_termCode not in termCodes:
            raise Exception(f"Orphaned related termCode found: {related_termCode}")
print("No orphaned termCode found")

# Check for self-referencing terms

for term in terms["terms"]:
    related = term["related"]
    for related_termCode in related:
        if related_termCode == term["termCode"]:
            raise Exception(f"Self-referencing termCode found: {related_termCode}")
print("No self-referencing terms found")

# Check valid links

extractor = URLExtract()
for term in terms["terms"]:
    urls = extractor.find_urls(term["description"])
    for url in urls:
        check_url_live(url)

print("No broken links found")
