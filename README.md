# Contribute to the docs

Please follow this guide to contribute to the [Granite documentation site](https://github.com/ibm-granite/docs).

---

### 💻 1. Clone repo and add content

Our documentation is built with Markdown and MDX. You can embed components and interactive elements directly into your pages.

#### Clone the documentation repo

```bash
git clone https://github.com/ibm-granite/docs.git
```

#### Pull the latest changes

```bash
cd docs
git checkout main
git pull origin main
```

#### Create a branch

```bash
git checkout -b feature/add-new-page
```

#### Add or update content

- To add a page: create a `.mdx` file in the right directory
- To update a page: edit the existing `.mdx` file

#### Use the api-mdx tool

For API docs, we have created a tool that works with a Python library and automatically generates Markdown/MDX documentation directly from your codebase. Checkout the tool here: [api-mdx tool](https://github.ibm.com/research-design-tech-experiences/api-mdx)

---

### ✅ 2. Submitting your changes

#### Commit your work

```bash
git add .
git commit -m "<description of update>"
```

#### Push your branch

```bash
git push origin feature/add-new-page
```

#### Open a pull request

The response to your push request will tell you how to open a PR. Fill in the PR request with:
   - Summary of your changes
   - Linked issues (create issues if there aren't any to match)

#### Review process

- PRs are reviewed by maintainers
- Automated checks must pass
- At least one approval is required before merging


#### Mintlify documentation guide

Our documentation site is powered by [Mintlify](https://mintlify.com), which offers plenty of helpful tips and tricks for creating great docs.
Explore their resources here: [Mintlify Documentation guide](https://www.mintlify.com/docs)

