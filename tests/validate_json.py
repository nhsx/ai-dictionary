# %% [markdown]
# # Validate terms lists
#
# This python script extends json schema validation (`jsonschema --instance terms.json terms.schema.json`) to ensure:
#
# 1. slug: unique
# 2. title: unique
# 3. related: no references to non-existent slugs

# %%
# Import libraries
import json


# %%
# Load terms
try:
    f = open("../data/terms.json")
except:
    raise Exception("Unable to open terms.json")

try:
    terms = json.load(f)
except:
    raise Exception("Unable to parse terms.json as valid json")

# Check for unique slugs

slugs = []
for term in terms["terms"]:
    if term["slug"] in slugs:
        raise Exception(f"Duplicate slug found for \"{term['slug']}\"")
    else:
        slugs.append(term["slug"])

print(f"{len(slugs)} unique slug(s) in database")

# Check for unique titles

titles = []
for term in terms["terms"]:
    if term["title"] in titles:
        raise Exception(f"Duplicate title found for \"{term['title']}\"")
    else:
        titles.append(term["title"])

print(f"{len(titles)} unique title(s) in database")

# Check for orphaned slugs

for term in terms["terms"]:
    related = term["related"]
    for related_slug in related:
        if related_slug not in slugs:
            raise Exception(f"Orphaned related slug found: {related_slug}")
print("No orphaned slugs found")
