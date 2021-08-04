module.export = function (api) {
  api.cache(true); // 缓存babel的配置
  return {
    presets: [["@babel/preset-env", { module: false }]],
    plugins: ["@babel/plugin-syntax-dynamic-import"],
  };
};
