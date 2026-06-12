# JSON Utility Kit

A fast, private, browser-based JSON toolkit for formatting, validating, viewing, editing, minifying, and converting JSON data. Built with modern web standards to ensure complete client-side data privacy.

[English](./README.md) | [简体中文](./README_ZH.md)

---

## ✨ Features

- **100% Client-Side Processing**: Your JSON never leaves your browser. No databases, no cloud APIs, no data leaks.
- **JSON Formatter & Beautifier**: Reformat messy JSON with adjustable indentation (2 spaces, 4 spaces, or Tabs).
- **JSON Validator**: Detailed syntax checking and error pinpointing using modern browser exceptions.
- **JSON Viewer**: Interactive, collapsible tree view with real-time key/value searching and JSON path copying.
- **JSON Minifier**: Lossless structural compression with compression ratio statistics (original size vs. minified size).
- **JSON Editor**: Real-time editor with alphabetized keys-sorting option.
- **JSON to CSV & CSV to JSON**: High fidelity, standard-compliant (RFC 4180) conversion for spreadsheet compatibility.
- **SEO Optimized**: Pre-configured canonical URLs, XML sitemaps, robots.txt, and structured SEO descriptions.
- **Responsive Layout**: Seamless experience on both desktop and mobile screens. Includes a dark mode toggle.

---

## 🛠️ Tech Stack

- **Framework**: [Astro (v4)](https://astro.build/) - Ultra-fast static site generation (SSG) with zero client-side framework overhead.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Responsive, developer-friendly styling.
- **Logic**: Pure TypeScript & client-side JavaScript.

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg             # Web icon
│   ├── sitemap.xml             # Generated XML Sitemap
│   ├── robots.txt              # Crawl rules
│   └── ads.txt                 # Google AdSense publisher file
├── src/
│   ├── components/             # Reusable UI parts (Header, Footer, FAQ, related tools, etc.)
│   ├── layouts/                # Astro page layouts (General and Tool layout wrapper)
│   ├── content/                # MDX/Markdown documentation collection
│   └── pages/                  # Static routes for tools, home, blog, legal pages
└── tailwind.config.mjs         # Tailwind styling configs
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.14.1 or higher recommended).

### 2. Installation

Clone the repository and install dependencies:

```bash
# Navigate to the workspace
cd json_utility_kit

# Install dependencies
npm install
```

### 3. Start Development Server

Run the development server with hot-reload:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:4321`.

### 4. Build for Production

Compile highly optimized static assets into the `dist/` directory:

```bash
npm run build
```

### 5. Preview Production Build

Preview your locally built production assets before deploying:

```bash
npm run preview
```

---

## 🔒 Security & Privacy

This application does not have a backend server or a persistent database. It complies fully with local-first and browser-isolated principles. If you are handling sensitive server configurations, customer files, or API credentials, you can safely paste them here. You can even load the page, turn off your internet connection, and continue using all utilities.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as desired.
