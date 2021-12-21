module.exports = {
    lintOnSave: false,
    runtimeCompiler:true,
    devServer: {
        disableHostCheck:true,
        proxy: {
            "/api/": {
                //target: ""
            }
        }
    }

}
