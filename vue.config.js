module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.codetheorist.dev-tools.gui",
        copyright: "Copyright © 2021 CodeTheorist",
        productName: "CodeTheorist Dev Tools",
        publish: ['github']
      }
    }
  }
}