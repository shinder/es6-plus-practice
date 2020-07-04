# es6-plus-practice

1. 初始化專案

```bash
# 建立專案資料夾
mkdir es6-plus-practice

# 進入專案資料夾
cd es6-plus-practice

# 初始化專案
npm init -y
```

2. 安裝 babel

```bash
# 安裝 babel 核心
npm install --save-dev @babel/core @babel/cli

# 安裝 babel 解譯環境
npm i -D @babel/preset-env

# 安裝 可對老舊瀏覽器增進 Promise 功能的 polyfill
npm i -D @babel/polyfill
```

3. 設定 babel，建立 .babelrc 設定檔，內容如下：

```json
{ "presets": ["@babel/preset-env"] }
```

4. 建立 src 和 dist 資料夾

5. 查看 babel 參數
```npx babel --help```

6. 在 package.json 檔裡的 scripts 設定

```json
{ "transpile": "npx babel src --out-dir dist" }
```

7. 在 src/app.js 新增內容：

```js
let f = name=>{
    console.log(`hello ${name}`);
};
f('bill');
```

8. 執行 npm run transpile 後，可以在 dist/app.js 看到轉譯後的 ES5 寫法。

9. 安裝 webpack

```bash
npm i -D webpack
npm i -D webpack-cli
# 安裝 babel-loader
npm i -D babel-loader
```

10. 建立 build 資料夾，建立 build/index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
	<div id="info"></div>
	<script src="bundle.js"></script>
</body>
</html>
```

11. 建立設定檔 webpack.config.js

```js
const path = require('path');
module.exports = {
    entry: './src/app.js',
    mode: 'development', // development or production
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
};
```

12. 修改 src/app.js

```js
let f = name=>{
    document.querySelector('#info').innerHTML = `hello ${name}`;
};
f('bill');
```

13. 執行 npx webpack 即可看到轉譯好的 build/bundle.js。以瀏覽器開啟 build/index.html 可看到執行結果。



