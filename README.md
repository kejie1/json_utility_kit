# JSON Utility Kit

A fast, private, browser-based JSON toolkit for formatting, validating, viewing, editing, minifying, and converting JSON data. Built with modern web standards to keep data processing local in the browser.

**Live Website:** [https://jsonutilitykit.com/](https://jsonutilitykit.com/)

## Live Tool Links

- [CSV to JSON Converter](https://jsonutilitykit.com/tools/csv-to-json/)
- [JSON Formatter](https://jsonutilitykit.com/tools/json-formatter/)
- [JSON Validator](https://jsonutilitykit.com/tools/json-validator/)
- [JSON to CSV Converter](https://jsonutilitykit.com/tools/json-to-csv/)
- [CSV to JSON Export Guide](https://jsonutilitykit.com/blog/how-to-export-csv-to-json-online)
- [CSV to JSON in JavaScript Guide](https://jsonutilitykit.com/blog/how-to-convert-csv-to-json-in-javascript)
- [CSV to JSON Integration Guide](https://jsonutilitykit.com/blog/csv-to-json-integration-guide)

[English](./README.md) | [Simplified Chinese](./README_ZH.md)

---

## Features

- **100% client-side processing:** JSON and CSV data stays in the browser. No databases, no cloud APIs, and no file uploads.
- **JSON formatter and beautifier:** Reformat messy JSON with 2 spaces, 4 spaces, or tab indentation.
- **JSON validator:** Check syntax and pinpoint parsing errors using modern browser exceptions.
- **JSON viewer:** Explore JSON as an interactive collapsible tree with key/value search and path copying.
- **JSON minifier:** Compress JSON structure and review original size, minified size, and compression ratio.
- **JSON editor:** Edit JSON in real time with an optional alphabetized key-sorting workflow.
- **JSON to CSV and CSV to JSON:** Convert spreadsheet-friendly data with RFC 4180-aware CSV handling, including optional nested JSON output from dotted CSV headers.
- **SEO-ready static site:** Canonical URLs, XML sitemap, robots.txt, and structured page descriptions are included.
- **Responsive layout:** Works on desktop and mobile screens, with a dark mode toggle.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) static site generation.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/).
- **Logic:** TypeScript and client-side JavaScript.

---

## Project Structure

```text
public/
  favicon.svg
  sitemap.xml
  robots.txt
  ads.txt
src/
  components/
  layouts/
  content/
  pages/
tailwind.config.mjs
```

---

## Getting Started

### 1. Prerequisites

Use Node.js v18.14.1 or higher.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open `http://localhost:4321`.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

## Security and Privacy

This application does not use a backend server or a persistent database. Tool inputs are processed in browser memory, so JSON and CSV content is not uploaded for conversion, formatting, validation, or minification.

---

## License

This project is licensed under the MIT License.
