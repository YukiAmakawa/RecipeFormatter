module.exports = {
  chainWebpack: config => {
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
      .end();
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/reset.scss"; \
                      @import "@/assets/css/common.scss";`
      }
    }
  }
};
