const path = require("path");

const publicPath = process.env.VUE_APP_PUBLIC_PATH;
const outputDir = process.env.VUE_APP_OUTPUT_DIR;
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  // 本地开发服务器配置
  devServer: {
    // host
    host: "localhost",
    // 端口
    port: 80,
    // 编译完成自动打开浏览器
    open: true,
    // 禁用浏览器 overlay 警告和错误消息
    overlay: {
      warnings: false,
      errors: false
    },
    // 禁用 host 检查
    disableHostCheck: true,
    // 
    proxy: {
      "/api": {
        target: "http://www.fastmock.site/mock/4dac551bb65d2c54d3b7c6eeabb0f2da",
        secure: true,
        changeOrigin: true
      }
    }
  },
  // 根据环境变量自动适配项目基础路径
  publicPath: publicPath,
  // 根据环境变量自动适配项目资源文件打包目录
  outputDir: outputDir,
  // 禁用 eslint 代码检查
  lintOnSave: false,
  // 关闭哈希文件名
  filenameHashing: false,
  // 禁用生产环境的 Source Map
  productionSourceMap: false,
  // 修改 webpack 配置
  configureWebpack: config => {
    config.optimization = {
      // 将 runtime 单独打包
      runtimeChunk: "single",
      // 分割 vendors 包，将第三依赖包单独打包
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
  // 修改 webpack 配置
  chainWebpack: config => {
    // 禁用模块命名插件（建议启用）
    // config.plugins.delete("named-chunks");
    // config.plugins.delete("hash-module-ids");

    // 禁用浏览器 preload 和 prefetch 资源优化指令（建议启用）
    // config.plugins.delete("preload-main");
    // config.plugins.delete("prefetch-main");

    // 设置项目资源文件目录别名，方便模块引入
    config.resolve.alias.set("src", resolve("src"));

    // 当环境变量 analyzer 为 true 进行打包文件分析
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