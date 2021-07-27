const withPWA = require("next-pwa");

const settings = {
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV === "development",
  },
};

module.exports =
  process.env.NODE_ENV === "development" ? settings : withPWA(settings);
