module.exports = {
  pwa: {
    name: "T&I Conf 2021",
    themeColor: "#002b45",
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/settings.scss";'
      }
    }
  }
}
