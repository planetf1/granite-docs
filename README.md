# IBM Granite Documentation

Source for the IBM Granite documentation site, built with [Docusaurus 3](https://docusaurus.io/) and published to GitHub Pages.

---

## Local development

### Prerequisites

- Node.js 20 or later

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm start
```

The site is available at http://localhost:3000/docs/granite/docs/.

### Build

```bash
npm run build
```

A production build is written to `build/`.

---

## Contributing

### Add or update a page

- Pages live under `granite/docs/` as `.mdx` files.
- To add a page: create an `.mdx` file in the right directory, then add it to `sidebars.ts`.
- To update a page: edit the existing `.mdx` file directly.

### Frontmatter

Each page should have a `title` and `description` in its frontmatter:

```mdx
---
title: "My Page"
description: "What this page covers."
---
```

### Components

The following components are available in MDX files:

| Component | Purpose |
|---|---|
| `<Card title="..." href="..." icon="...">` | Linked card |
| `<CardGroup cols={2}>` | Grid container for cards |
| `<Accordion title="...">` | Collapsible section |
| `<AccordionGroup>` | Container for accordions |

For simple callouts, prefer native Docusaurus admonitions:

```mdx
:::note
This is a note.
:::

:::warning
This is a warning.
:::
```

### Submit a pull request

1. Create a branch: `git checkout -b feature/my-change`
2. Make your changes and test locally with `npm start`
3. Open a PR against `main`

PRs require at least one maintainer approval and a passing CI build before merging.
