module.exports = {
  pwa: {
    name: "DFDS T&I conf 2021",
    themeColor: "#002b45",
    workboxOptions: {
//      skipWaiting: true,
//      clientsClaim: true,
      swSrc: "src/service-worker.js",
    },
    workboxPluginMode: "InjectManifest"
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/scss/settings.scss";'
      }
    }
  }
}
