const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // If using the runtime only build
      path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.codetheorist.dev-tools.gui",
        copyright: "Copyright © 2021 CodeTheorist",
        disableMainProcessTypescript: false,
        mainProcessTypeChecking: false,
        productName: "CodeTheorist Dev Tools",
        publish: ['github'],
        removeElectronJunk: false
      }
    }
  }
}