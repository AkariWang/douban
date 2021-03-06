const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_v', resolve('src/view'))
            .set('_l', resolve('src/libs'))
            .set('_a', resolve('src/api'))
    }
}