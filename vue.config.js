const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 本地开发服务器配置
  devServer: {
    // HOST
    host: "localhost",
    // 端口
    port: 80,
    // 编译完成自动打开浏览器
    open: true,
    // 去除浏览器 overlay 警告和错误消息
    overlay: {
      warnings: false,
      errors: false
    },
    // 禁用HOST检查
    disableHostCheck: true
  },
  // 
  publicPath: process.env.publicPath,
  // 根据环境变量自动切换项目打包目录
  outputDir: process.env.outputDir,
  // 去除编译时的 eslint 代码检查
  lintOnSave: false,
  // 关闭哈希文件名
  filenameHashing: false,
  // 去除生产环境的 Source Map
  productionSourceMap: false,
  // 
  configureWebpack: config => {
    config.optimization = {
      // 
      runtimeChunk: "single",
      // 
      splitChunks: {
        chunks: "all",
        minSize: 10000,
        maxInitialRequests: Infinity,
        cacheGroups: {
          "vue": {
            name: "vue",
            test: /[\\/]node_modules[\\/]vue[\\/]/,
            priority: -10
          },
          "vue-i18n": {
            name: "vue-i18n",
            test: /[\\/]node_modules[\\/]vue-i18n[\\/]/,
            priority: -11
          },
          "vue-router": {
            name: "vue-router",
            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
            priority: -12
          },
          "vuex": {
            name: "vuex",
            test: /[\\/]node_modules[\\/]vuex[\\/]/,
            priority: -13
          },
          "vui-design": {
            name: "vui-design",
            test: /[\\/]node_modules[\\/]vui-design[\\/]/,
            priority: -14
          },
          "vendors": {
            name: "vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: -20
          }
        }
      }
    };
  },
  // 
  chainWebpack: config => {
    // 
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");

    // 为项目根目录下的 src 源码目录定义别名，方便模块引入
    config.resolve.alias.set("src", resolve("src"));

    // 当环境变量 analyzer 为 true 启用打包文件分析工具
    if (process.env.analyzer) {
      config.plugin("webpack-bundle-analyzer").use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin).end();
    }

    // 测试环境
    // 预发布环境
    // 生产环境
    if (process.env.NODE_ENV === "production") {
      // JS 文件输出配置
      config.output.filename("js/[name].js?v=[chunkhash:8]").end();
      config.output.chunkFilename("js/[name].js?v=[chunkhash:8]").end();

      // CSS 文件输出配置
      config.plugin("extract-css").tap(args => {
        return [
          {
            filename: "css/[name].css?v=[chunkhash:8]",
            chunkFilename: "css/[name].css?v=[chunkhash:8]"
          }
        ];
      });

      // 图片文件输出配置
      config.module.rule("images").use("url-loader").loader("file-loader").options({
        name: "images/[name].[ext]?v=[hash:8]"
      });
      config.module.rule("svg").use("file-loader").loader("file-loader").options({
        name: "images/[name].[ext]?v=[hash:8]"
      });
    }
    // 开发环境
    else {
      // JS 文件输出配置
      config.output.filename("js/[name].js?v=[hash:8]").end();
      config.output.chunkFilename("js/[name].js?v=[hash:8]").end();

      // 图片文件输出配置
      config.module.rule("images").use("url-loader").loader("file-loader").options({
        name: "images/[name].[ext]?v=[hash:8]"
      });
      config.module.rule("svg").use("file-loader").loader("file-loader").options({
        name: "images/[name].[ext]?v=[hash:8]"
      });
    }
  },
  // 页面配置
  pages: {
    main: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vui Design Pro",
      chunks: ["runtime", "vue", "vue-i18n", "vue-router", "vuex", "vui-design", "vendors", "main"]
    }
  }
};