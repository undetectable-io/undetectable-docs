// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Undetectable Docs",
  url: "https://docs.undetect.me",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "undetectable-io", // Usually your GitHub org/user name.
  projectName: "undetectable-docs", // Usually your repo name.

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      ru: {
        htmlLang: "ru-RU",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      navbar: {
        logo: {
          alt: "Undetectable Logo",
          src: "img/undetectable-gradient.svg",
          srcDark: "img/undetectable-light.svg",
        },

        items: [
          {
            position: "left",
            label: "Home",
            href: "https://undetectable.io/",
          },
          {
            position: "left",
            label: "Pricing",
            href: "https://undetectable.io/pricing/",
          },

          {
            position: "left",
            label: "Changelog",
            href: "https://undetectable.io/changelog/",
          },

          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Undetectable',
            items: [
              {
                label: 'Use Cases',
                href: 'https://undetectable.io/#use__cases',
              },
              {
                label: 'Advantages',
                href: 'https://undetectable.io/#benefits',
              },
              {
                label: 'FAQ',
                href: 'https://undetectable.io/#faq',
              },
              {
                label: 'Pricing',
                href: 'https://undetectable.io/pricing/',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Telegram Support',
                href: 'https://undetectable.io/pricing/',
              },
              {
                label: 'Skype Support',
                href: 'skype:live:.cid.71ef0b3466281e13?chat',
              },
              {
                label: 'Email Support',
                href: 'mailto:support@undetectable.io',
              },
            ],
          },
          {
            title: 'Resourses',
            items: [
              {
                label: 'Blog',
                href: 'https://undetectable.io/blog/',
              },
              {
                label: 'Changelog',
                href: 'https://undetectable.io/changelog/',
              },
              {
                label: 'Partners',
                href: 'https://undetectable.io/partners/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                href: 'https://undetectable.io/terms-of-service/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://undetectable.io/privacy-policy/',
              },
              {
                label: 'Partners',
                href: 'https://undetectable.io/partners/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "RDK81I3X0K",
        apiKey: "f1e74e044ed92a67d114d724b92c5ab1",
        indexName: "undetectable-docs",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
