---
title: "What Is JSON? An Introduction to JavaScript Object Notation"
description: "Discover the history, syntax, and use-cases of JSON, the web's most popular data interchange format."
date: "2026-06-05"
h1: "What Is JSON? An Introduction to JavaScript Object Notation"
shortAnswer: "JSON (JavaScript Object Notation) is a lightweight, human-readable data format used for transmitting and storing structured data in web applications."
relatedToolLink: "/tools/json-viewer"
relatedToolName: "JSON Viewer"
---

## Introduction to JSON

**JSON**, which stands for **JavaScript Object Notation**, is a lightweight data-interchange format. It is easy for humans to read and write, and it is easy for machines to parse and generate. Originally popularized by Douglas Crockford in the early 2000s, JSON has become the de facto standard for transmitting data in web APIs, replacing XML in almost all modern applications.

Despite having "JavaScript" in its name, JSON is completely language-independent. Most modern programming languages have robust built-in support for parsing and writing JSON data.

---

## JSON Syntax Rules

JSON is built on two primary structures:
1. **A collection of name/value pairs** (commonly realized as an object, dictionary, or hash table).
2. **An ordered list of values** (realized as an array, list, or vector).

### Core Syntax Constraints
- Data is represented in key/value pairs.
- Keys must always be wrapped in **double quotes** (e.g., `"name": "Alice"`).
- Values must be one of the six valid data types (see below).
- Key/value pairs are separated by commas.
- No trailing commas are allowed at the end of objects or arrays.

---

## Valid JSON Data Types

A JSON value can only be one of the following:

| Type | Description | Example |
| :--- | :--- | :--- |
| **String** | Wrapped in double quotes, supports unicode characters. | `"Hello World"` |
| **Number** | Double-precision floating-point format (no octal or hexadecimal). | `42` or `-3.14` |
| **Object** | An unordered collection of key/value pairs enclosed in `{}`. | `{"id": 1}` |
| **Array** | An ordered collection of values enclosed in `[]`. | `[1, 2, "three"]` |
| **Boolean** | Lowercase logical values. | `true` or `false` |
| **Null** | Represents an empty or non-existent value. | `null` |

---

## A Complete JSON Example

Here is a standard JSON payload describing a user profile:

```json
{
  "userId": 101,
  "username": "coder_jane",
  "verified": true,
  "roles": ["admin", "developer"],
  "profile": {
    "firstName": "Jane",
    "lastName": "Smith",
    "avatarUrl": null
  }
}
```

---

## Frequently Asked Questions

### Is JSON a programming language?
No. JSON is strictly a static text-based data representation format. It cannot contain executable functions, logic, or variables.

### Can JSON files contain comments?
No, the standard JSON specification (RFC 8259) does not support comments (`//` or `/* */`). If you need configuration files with comments, alternative formats like JSONC or YAML are preferred.
