import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as RedirectOptions} from '@docusaurus/plugin-client-redirects';

const BASE_URL: string = process.env.DOCS_BASE_URL ?? '/docs/';
const SITE_URL: string = process.env.DOCS_SITE_URL ?? 'https://ibm-granite.github.io';

const config: Config = {
  title: 'IBM Granite',
  tagline: 'Foundation models for business',
  url: SITE_URL,
  baseUrl: BASE_URL,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',

  favicon: 'images/granite-pictogram.svg',
  trailingSlash: false,
  i18n: {defaultLocale: 'en', locales: ['en']},
  markdown: {format: 'detect', hooks: {onBrokenMarkdownLinks: 'warn'}},

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'granite/docs',
          routeBasePath: 'granite/docs',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: 'https://github.com/ibm-granite/docs/edit/main/',
        } satisfies DocsOptions,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {changefreq: 'weekly', priority: 0.5},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [],
      } satisfies RedirectOptions,
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ['granite/docs'],
        language: ['en'],
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  themeConfig: {
    image: 'images/hero-light.png',
    metadata: [
      {name: 'keywords', content: 'IBM Granite, AI, foundation models, LLM'},
      {name: 'description', content: 'IBM Granite documentation — models, serving guides, cookbooks'},
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'IBM Granite',
        src: 'logo/logo-light.svg',
        srcDark: 'logo/logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cookbooksSidebar',
          position: 'left',
          label: 'Cookbooks',
        },
        {
          href: 'https://www.ibm.com/granite/playground',
          label: 'Playground ↗',
          position: 'left',
        },
        {
          href: 'https://huggingface.co/ibm-granite',
          label: 'Download Granite',
          position: 'right',
          className: 'navbar-download-btn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {label: 'IBM Granite', href: 'https://www.ibm.com/granite'},
            {label: 'Hugging Face', href: 'https://huggingface.co/ibm-granite'},
            {label: 'Ollama', href: 'https://ollama.com/library/granite4'},
            {label: 'GitHub', href: 'https://github.com/ibm-granite'},
          ],
        },
        {
          title: 'IBM Support & Legal',
          items: [
            {label: 'Contact IBM', href: 'https://www.ibm.com/contact/global'},
            {label: 'Terms of use', href: 'https://www.ibm.com/legal?lnk=flg-tous-usen'},
            {label: 'Privacy', href: 'https://www.ibm.com/us-en/privacy'},
            {label: 'Accessibility', href: 'https://www.ibm.com/able/?lnk=flg-acce-usen'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', href: 'https://ibm.com/blog'},
            {label: 'Playground', href: 'https://www.ibm.com/granite/playground'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IBM Corporation.`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    prism: {
      additionalLanguages: ['python', 'bash', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {src: `${BASE_URL}analytics.js`, async: true},
  ],
};

export default config;
