module.exports = {
    lintOnSave: false,
    runtimeCompiler:true,

    devServer: {
        disableHostCheck:true,
        proxy: {
            "/api/": {
                target: "https://www.relabase.com/api/"
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
