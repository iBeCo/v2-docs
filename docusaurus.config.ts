import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Indoor navigation, wayfinding, and Mapping solution | Becomap',
  tagline: 'Indoor Navigation & Asset Tracking',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX', // ✅ Replace with your real GA4 ID
        anonymizeIP: true,
      },
    ],
  ],
  
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://becomap.com/becomap.png',
    navbar: {
      logo: {
        alt: 'Beco Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {href: 'https://becomap.com/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/iBeCo/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Solutions',
          items: [
            {
              label: 'Indoor Navigation',
              href: 'https://becomap.com/solutions/indoor-mapping/',
            },
            {
              label: 'Asset Tracking',
              href: 'https://becomap.com/solutions/asset-tracking/',
            },
            {
              label: 'Proximity Services',
              href: 'https://becomap.com/solutions/proximity-services/',
            },
            {
              label: 'Analytics',
              href: 'https://becomap.com/solutions/analytics/',
            },
            {
              label: 'Kiosk',
              href: 'https://becomap.com/solutions/kiosk/',
            },
            {
              label: 'Web App',
              href: 'https://becomap.com/solutions/web-app/',
            },
          ],
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'Becomap.com',
              href: 'https://becomap.com',
            },
            {
              label: 'Company',
              href: 'https://becomap.com/company',
            },
            {
              label: 'Contact Us',
              href: 'https://becomap.com/contact/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://becomap.com/privacy-policy',
            },
            {
              label: 'Terms of Service',
              href: 'https://becomap.com/terms-of-service',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GlobeCo technologies Pvt Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  headTags: [
    // Google Site Verification
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: '15qFVqhUkTNXJT7C35hrc4NXO5gZmlMdsNUU296HOVA',
      },
    },
    // Description meta tag
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Indoor navigation system to improve visitor experience and staff management with indoor mapping & indoor wayfinding.',
      },
    },
    // Open Graph meta tags
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'Indoor navigation, wayfinding, and Mapping  solution | Becomap',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Indoor navigation system to improve visitor experience and staff management with indoor mapping & indoor wayfinding.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://becomap.com/becomap.png',
      },
    },
    // Twitter Card meta tags
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'Indoor navigation, wayfinding, and Mapping  solution | Becomap',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Indoor navigation system to improve visitor experience and staff management with indoor mapping & indoor wayfinding.',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://becomap.com/becomap.png',
      },
    },
  ],
};

export default config;
