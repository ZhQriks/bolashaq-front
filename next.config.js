const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    defaultLocale: "ru",
    locales: ["ru", "kk", "en"],
    localeDetection: false,
  },
};