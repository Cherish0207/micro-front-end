import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/my-single-spa.js",
  output: {
    file: "./lib/umd/my-single-spa.js",
    format: "umd", // 模块化类型 模块化规范:commonjs esm requirejs-amd cmd systemjs
    name: "mySingleSpa", // 打包后的全局变量的名字
    sourcemap: true, // chrome提出的为了方便解析混淆后的代码,更好的调试代码
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: "node_modules/**" }),
    // 见下方package.json文件script字段的serve命令
    // 目的是只有执行serve命令时才启动这个插件
    process.env.SERVE
      ? serve({
          open: true,
          contentBase: "",
          openPage: "/toutrial/index.html",
          host: "localhost",
          port: "10001", // 65535 2**16-1
        })
      : null,
  ],
};
