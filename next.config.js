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
  async rewrites() {
    //hide api requests to http://178.18.250.138:1337
    return [
      {
        source: "/galam/:path*",
        destination: "http://api.galam.life:8080/api/v2/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://178.18.250.138:1337/api/:path*",
      },
      {
        source: "/image/:path*",
        destination: "http://178.18.250.138:1337/:path*",
      },
    ];
  },
};
