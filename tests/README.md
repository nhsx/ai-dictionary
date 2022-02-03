# Tests

All tests are automatically run on every push to this repo.

## Validate JSON schema

The [JSON schema](../data/terms.schema.json) defines the required data structure of `terms.json`.

This can be tested using: `jsonschema --instance terms.json terms.schema.json`

## `validate_json.py`

This python script extends json schema validation to ensure:

1. `slug`: unique
2. `title`: unique
3. `related`: no references to non-existent slugs
4. `related`: no self-referencing
5. `description`: no broken links in URLs
