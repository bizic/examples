module.exports = {
  chainWebpack: (config) => {
    // console.log(config.module.rule('js').__proto__);
    config.module
      .rule('js')
      .include
      .add((file) => {
        console.log(file);
        return /.*node_modules\/saxony.*/.test(file);
      })
      // .add('.node_modules/saxony-vue')
      .end();
  },
};
