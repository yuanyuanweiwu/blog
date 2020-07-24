const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
    webpack(config, options) {
        config.module.rules.push({
            test:  [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                        publicPath:"/_next/"
                    }
                }
            ]
        })
 
        return config
    }
})