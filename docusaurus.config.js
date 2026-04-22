// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki PlaNAR',
  tagline: 'O cérebro oficial da rede PlaNAR',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

 // Set the production url of your site here
url: 'https://jtveigaita.github.io',

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
baseUrl: '/wiki/',

// GitHub pages deployment config.
organizationName: 'jtveigaita', // seu usuário no GitHub
projectName: 'wiki', // nome do repositório

onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/doramatech/2dm-wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/doramatech/wikiplanar/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Wiki PlaNAR',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          
          {
            href: 'https://github.com/doramatech/wikiplanar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'PlaNAR',
            items: [
              {
                label: 'MRCF Framework',
                href: 'https://github.com/JtveigaIta/mrcf',
              },
              {
                label: 'Wiki Documentation',
                href: 'https://github.com/doramatech/wikiplanar',
              },
              {
                label: 'Core Platform',
                href: 'https://github.com/JtveigaIta/planar',
              },
            ],
          },
          {
            title: 'Site Oficial',
            items: [
              {
                label: 'Auteron',
                href: 'https://auteron.com.br',
              },
            ],
          },
          {
            title: 'Apoiadores',
            items: [
              {
                label: 'BR-UTM (DECEA)',
                href: 'https://br-utm.decea.mil.br/',
              },
              {
                label: 'ITA',
                href: 'http://www.ita.br/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PlaNAR Project.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
