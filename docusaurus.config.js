// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Undetectable Docs",
  url: "https://docs.undetectable.io/",
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

  plugins: ["plugin-image-zoom"],

  presets: [
    [
      "classic", /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
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

      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      editCurrentVersion: true,
      // imageZoom: {
      //   selector: ".markdown img",
      //   options: {
      //     margin: 100,
      //     background: "var(--docsearch-hit-background)",
      //     scrollOffset: 0,
      //   },
      // },
      navbar: {
        logo: {
          alt: "Undetectable Logo",
          src: "img/logo-dark.svg",
          srcDark: "img/logo-light.svg",
        },

        items: [{
            position: "left",
            label: "Home",
            to: "https://undetectable.io/",
          },
          {
            position: "left",
            label: "Pricing",
            to: "https://undetectable.io/pricing/",
          },

          {
            position: "left",
            label: "Changelog",
            to: "https://undetectable.io/changelog/",
          },

          {
            position: "left",
            label: "Blog",
            to: "https://undetectable.io/blog/",
          },

          {
            position: "left",
            label: "Download",
            to: "https://undetectable.io/download/",
          },


          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [{
            title: "Undetectable",
            items: [{
                label: "Use Cases",
                to: "https://undetectable.io/#use",
              },
              {
                label: "Advantages",
                to: "https://undetectable.io/#benefits",
              },
              {
                label: "Roadmap",
                to: "https://undetectable.io/#roadmap",
              },
              {
                label: "Downloads",
                to: "https://undetectable.io/download/",
              },
            ],
          },
          {
            title: "Support",
            items: [{
                label: "Telegram Support",
                to: "https://t.me/UndetectableBot/",
              },
              {
                label: "Skype Support",
                to: "skype:live:.cid.71ef0b3466281e13?chat",
              },
              {
                label: "Email Support",
                to: "mailto:support@undetectable.io",
              },
            ],
          },
          {
            title: "Resourses",
            items: [{
                label: "Blog",
                to: "https://undetectable.io/blog/",
              },
              {
                label: "Changelog",
                to: "https://undetectable.io/changelog/",
              },
              {
                label: "Partners",
                to: "https://undetectable.io/partners/",
              },
            ],
          },
          {
            title: "Legal",
            items: [{
                label: "Terms of Service",
                to: "https://undetectable.io/terms-of-service/",
              },
              {
                label: "Privacy Policy",
                to: "https://undetectable.io/privacy-policy/",
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
        appId: "8PSKKPV3OQ",
        apiKey: "cb15da6f35451f5fed2b4857aedb7841",
        indexName: "dev_undetectable-docs",
        contextualSearch: true,
      },
    }),
};

module.exports = config;