---
title: "How to Convert CSV to JSON in JavaScript"
description: "A developer guide to converting CSV to JSON in JavaScript, including header mapping, quoted cells, type casting, and browser-safe parsing."
date: "2026-06-19"
h1: "How to Convert CSV to JSON in JavaScript"
shortAnswer: "To convert CSV to JSON in JavaScript, parse the first row as headers, split each following row into cells, map cells to header keys, and return an array of objects."
relatedToolLink: "/tools/csv-to-json"
relatedToolName: "CSV to JSON Converter"
---

## The simple idea

CSV to JSON conversion starts with one rule: the first row usually becomes the object keys. Every following row becomes one JSON object.

CSV:

```csv
sku,name,price
A-100,Keyboard,49.99
B-200,Mouse,24.5
```

JSON:

```json
[
  { "sku": "A-100", "name": "Keyboard", "price": 49.99 },
  { "sku": "B-200", "name": "Mouse", "price": 24.5 }
]
```

You can test this instantly with the [CSV to JSON Converter](/tools/csv-to-json), then reuse the output in JavaScript.

## Basic JavaScript parser

For very simple CSV without quoted commas, this works:

```javascript
function csvToJson(csv) {
  const rows = csv.trim().split("\n");
  const headers = rows[0].split(",").map((header) => header.trim());

  return rows.slice(1).map((row) => {
    const values = row.split(",");
    return headers.reduce((record, header, index) => {
      record[header] = values[index]?.trim() ?? "";
      return record;
    }, {});
  });
}
```

This version is useful for clean internal data, but it fails when a cell contains a comma inside quotes.

## Handling quoted commas

Real CSV often contains values like this:

```csv
id,note
1,"Imported from New York, USA"
```

A production-ready parser needs a small state machine that tracks whether the current character is inside quotes. The [CSV to JSON Converter](/tools/csv-to-json) uses this kind of approach so commas inside quoted fields remain part of the same value.

## Type casting

CSV stores everything as text. JSON can represent strings, numbers, booleans, and null values. A useful converter can turn:

```text
"42" -> 42
"true" -> true
"" -> null
```

This is helpful when you need JSON for API payloads, seed data, tests, or front-end fixtures.

## Browser-safe workflow

If you are debugging a small export, paste it into the [CSV to JSON Converter](/tools/csv-to-json), inspect the output, then copy the JSON into your JavaScript file. This is faster than writing a parser every time and avoids uploading private CSV files.

## FAQ

### Should I use a library?

Use a library for large files, streaming imports, or complex edge cases. For small browser-side conversions, a local converter is often faster.

### Can JavaScript parse Excel CSV?

Yes, as long as the exported file is plain CSV text. Check whether the delimiter is comma, semicolon, or tab.

### What is the safest output shape?

An array of objects is usually the safest output because each row keeps the same named keys from the header row.
