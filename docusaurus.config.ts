import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

// Code block themes
const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

const meta = {
  title: "Indoor navigation, wayfinding, and Mapping solution | Becomap",
  tagline: "Indoor Navigation & Asset Tracking",
  favicon: "img/favicon.ico",
  url: "https://becomap.com",
  baseUrl: "/",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

// const docs = [
//   {
//     id: 'overview',
//     path: 'docs/overview',
//     routeBasePath: '/overview',
//   },
//   {
//     id: 'becomap-js',
//     path: 'docs/becomap-js',
//     routeBasePath: '/becomap-js',
//   },
//   // Mobile Core
//   {
//     id: 'android-sdk',
//     path: 'docs/android-sdk',
//     routeBasePath: '/android-sdk',
//   },
//   {
//     id: 'ios-sdk',
//     path: 'docs/ios-sdk',
//     routeBasePath: '/ios-sdk',
//   },
// ];

const defaultSettings = {
  breadcrumbs: true,
  editUrl: "https://github.com/iBeCo/v2-docs",
  sidebarCollapsible: true,
  remarkPlugins: [[npm2yarn, { sync: true }]],
  sidebarPath: "./sidebars.ts",
};

function create_doc_plugin({
  sidebarPath = "./sidebars.ts",
  ...options
}: any): [string, any] {
  return [
    "@docusaurus/plugin-content-docs",
    { ...defaultSettings, sidebarPath, ...options },
  ];
}

const tailwindPlugin = "./src/plugins/tailwind-config.js";
// const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

// console.log(docs_plugins, 'docs_plugins');

const plugins = [tailwindPlugin];

const config: Config = {
  ...meta,
  plugins,
  future: {
    v4: true,
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      {
        docs: {
          id: "default",
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "https://becomap.com/becomap.png",
    colorMode: {
      defaultMode: "light",
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    announcementBar: {
      id: "announcementBar-beco-v1",
      content:
        '🎉️ **Beco Android SDK v1.0 is now available!** Check out the <a href="/docs/android-sdk/getting-started">Getting Started guide</a> 🚀',
      backgroundColor: "#25c2a0",
      textColor: "#fff",
      isCloseable: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      logo: {
        href: "/",
        src: "/logo/light.svg",
        srcDark: "/logo/dark.svg",
        alt: "becomap Documentation | becomap Docs",
        // height: '50px',
        width: "157px",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "apiSidebar",
        //   position: "left",
        //   label: "API",
        // },
        {
          href: "https://becomap.com/blog/",
          position: "left",
          label: "Blog",
          className: "!flex items-center gap-2",

        },
        {
          type: "search",
          position: "right",
        },
        {
          label: "Book a demo",
          href: "https://becomap.com/contact/",
          position: "right",
          className: "!flex items-center gap-2",
        },
      ],
    },
    footer: {
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Overview', to: '/docs/overview' },
              { label: 'Android SDK', to: '/docs/android-sdk' },
              { label: 'iOS SDK', to: '/docs/ios-sdk' },
              { label: 'becomap JS', to: '/docs/becomap-js' },
              { label: 'Enterprise Apps', to: '/docs/enterprise-apps' },
            ],
          },
          {
            title: 'Demos',
            items: [
              { label: 'Showcase', to: '/demos/showcase' },
              { label: 'Playground', to: '/demos/playground' },
              { label: 'Mappedin Web Demos', to: '/demos/mappedin-web-demos' }
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'Community', to: '/social/community' },
              { label: 'Blog', to: '/blog' }
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'becomap.com', to: 'https://becomap.com' },
              { label: 'Pricing', to: 'https://becomap.com/pricing' },
              { label: 'About Us', to: 'https://becomap.com/about-us' },
              { label: 'Contact Us', to: 'https://becomap.com/contact-us' },
              { label: 'Privacy Policy', to: 'https://becomap.com/privacy-policy' },
              { label: 'Terms of Service', to: 'https://becomap.com/terms-of-service' }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} becomap, Inc.`,
    },
    prism: {
      theme: code_themes.light,
      darkTheme: code_themes.dark,
      additionalLanguages: [
        "java",
        "kotlin",
        "swift",
        "bash",
        "json",
        "gradle",
        "markup",
        "yaml",
        "properties",
      ],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-block-error-line",
          line: "highlight-next-line-error",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
