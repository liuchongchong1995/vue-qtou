const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false, //严格模式关闭
    productionSourceMap: false,
    // lintOnSave: false,
    configureWebpack: {
        name: "轻投",
        devtool: "source-map",
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },

    devServer: {
        proxy: {
            "/api": {
                // target: 'http://scique-admin-test.kczg.org.cn/',
                target: "http://scique-admin-test.kczg.org.cn/",
                changOrigin: true,
                pathRewrite: {
                    ["^/api"]: ""
                }
            }
        }
    },

    pluginOptions: {
        webpackBundleAnalyzer: {
            openAnalyzer: false
        }
    },

    chainWebpack(config) {
        // set HTML Title
        config.plugin("html").tap(args => {
            args[0].title = "轻投";

            return args;
        });

        // set svg-sprite-loader
        config.module
            .rule("svg")
            .exclude.add(resolve("src/assets/icons"))
            .end();

        config.module
            .rule("icons")
            .test(/\.svg$/)
            .include.add(resolve("src/assets/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            })
            .end();

        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            })
            .end();

        config.when(process.env.NODE_ENV === "development", config =>
            config.devtool("cheap-source-map")
        );

        config.when(process.env.NODE_ENV !== "development", config => {
            config
                .plugin("ScriptExtHtmlWebpackPlugin")
                .after("html")
                .use("script-ext-html-webpack-plugin", [
                    {
                        // `runtime` must same as runtimeChunk name. default is `runtime`
                        inline: /runtime\..*\.js$/
                    }
                ])
                .end();

            config.optimization.splitChunks({
                chunks: "all",
                cacheGroups: {
                    libs: {
                        name: "chunk-libs",
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: "initial" // only package third parties that are initially dependent
                    },
                    elementUI: {
                        name: "chunk-elementUI", // split elementUI into a single package
                        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                        test: /[\\/]node_modules[\\/]_?element-ui(.*)/
                    },
                    commons: {
                        name: "chunk-commons",
                        test: resolve("src/components"), // can customize your rules
                        minChunks: 3, //  minimum common number
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            });
            config.optimization.runtimeChunk("single");
        });
    },

    outputDir: "website"
};
