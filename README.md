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

2. 安裝 Babel

```bash
# 安裝 babel 核心
npm install --save-dev @babel/core @babel/cli

# 安裝 babel 解譯環境
npm i -D @babel/preset-env

# 安裝 可對老舊瀏覽器增進 Promise 功能的 polyfill
npm i -D @babel/polyfill
```

3. 設定 Babel，建立 .babelrc 設定檔，內容如下：

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












