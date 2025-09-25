# Contribute to the docs

Welcome! This guide will help you contribute to our documentation powered by [Mintlify](https://mintlify.com). Whether you're adding a new page, fixing a typo, or updating an existing section, this guide explains the process step by step.

---

## Table of Contents

1. [Adding Content](#-1-adding-content)
2. [Submitting Your Changes](#-2-submitting-your-changes)
3. [Getting Help from the Design Team](#-3-getting-help-from-the-design-team)

---

## 💻 1. Adding Content

Our documentation is built with Markdown and MDX. You can embed components and interactive elements directly into your pages.

### Clone the documentation repo

```bash
git clone git@github.com:ibm-granite/docs.git
```

### Pull the Latest Changes

```bash
git checkout main
git pull origin main
```

### Create a Branch

```bash
git checkout -b feature/add-new-page
```

### Add or Update Content

- To add a page: create a `.mdx` file in the right directory
- To update a page: edit the existing `.mdx` file

### Use the api-mdx Tool

For API docs, we have created a tool that works with a Python library and automatically generates Markdown/MDX documentation directly from your codebase.

- Checkout the tool here: [api-mdx tool](https://github.ibm.com/research-design-tech-experiences/api-mdx)

---

## ✅ 2. Submitting Your Changes

### Commit Your Work

```bash
git add .
git commit -m "feat: add guide for new contributors"
```

### Push Your Branch

```bash
git push origin feature/add-new-page
```

### Open a Pull Request

1. Go to GitHub and open a PR to `main`.
2. Fill in the PR template with:
   - Summary of your changes
   - Motivation for the change
   - Any linked issues

### Review Process

- PRs are reviewed by maintainers (Docs + Design)
- Automated checks must pass
- At least one approval is required before merging

---

## 🤝 3. Getting Help from the Design Team

If you run into issues following the instructions above, or need help creating a new documentation project, reach out to the Design team. They can assist with setup, structure, and maintaining consistency in the documentation’s look and feel.

### Use the Mintlify Template

For new projects, start with our official template repository:

- [Mintlify Template Repository](https://github.ibm.com/research-design-tech-experiences/mintlify-ibm-template)

This template includes the correct file structure, configurations, and a sample `.mdx` file to help you begin.

---

## 📖 Writing Guidelines

- Use **American English**
- Prefer active voice
- Keep sentences short and clear
- Add code blocks for commands and examples

### Mintlify documentation guide

Mintlify doc site has a lot of tips and tricks to help with documentation.  
You can check it out here: [Documentation guide](https://www.mintlify.com/docs)

---

🙌 Thank you for contributing! Your improvements help make our documentation more useful and accessible.
