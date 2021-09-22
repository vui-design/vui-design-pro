# Vui Design Pro 后台前端解决方案

## 在线预览

[Demo](https://vui-design.github.io/vui-design-pro/)

## 目录结构

```
- dist 生产环境目录文件

- dist.test 测试环境目录文件

- dist.release 预发布环境目录文件

- node_modules 项目依赖

- public
  - favicon.ico 网站图标
  - index.html 页面入口文件

- src
  - assets 图片、CSS等资源目录
  - components 公共组件
  - config 系统配置
  - directives Vue指令
  - filters Vue过滤器
  - layout 系统布局组件
  - libs 公共业务方法或第三方工具库
  - locale 系统语言包配置
  - mixins Vue混入
  - router 系统路由
  - routes 系统路由菜单配置
  - services 请求接口
  - store 状态管理
  - views 系统页面目录，对应 routes 配置
  - App.vue 根组件
  - main.js 系统入口

- .env.development 开发环境变量配置，只在dev模式中被载入

- .env.test 测试环境变量配置，只在test模式中被载入

- .env.release 预发布环境变量配置，只在release模式中被载入

- .env.production 生产环境变量配置，只在production模式中被载入

- babel.config.js Babel插件配置

- vue.config.js Webpack打包工具配置
```

## 开发

``` bash
# 克隆项目
git clone https://github.com/vui-design/vui-design-pro.git

# 进入项目目录
cd vui-design-pro

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug，可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动本地开发服务，启动服务前，请根据自身需求修改 vue.config.js 文件中 devServer 的 host 及 port 配置
npm run dev
```

## 发布

```bash
# 构建测试环境
npm run build:test

# 构建预发布环境
npm run build:release

# 构建生产环境
npm run build

# 同时构建测试环境、预发布环境和生产环境
npm run publish
```

## 其他

```bash
# 启用本地开发服务，并进行打包文件分析
npm run analyzer

# 代码格式检查
npm run lint
```