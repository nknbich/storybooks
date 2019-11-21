const proxy = require('http-proxy-middleware');

const HOST = 'staging3.intgdc.com';
const URI = `https://${HOST}`;

module.exports = function (app) {
    app.use(proxy("/gdc", {
        "changeOrigin": true,
        "cookieDomainRewrite": "10.0.69.40",
        "secure": false,
        "target": URI,
        "headers": {
            "host": HOST,
            "origin": null
        },
        "onProxyReq": function (proxyReq, _req, _res) {
            proxyReq.setHeader('accept-encoding', 'identity')
        }
    }));
    app.use(proxy("/account.html", {
        "changeOrigin": true,
        "secure": false,
        "target": URI
    }));
    app.use(proxy("/packages/*.{js,css}", {
        "changeOrigin": true,
        "secure": false,
        "target": URI
    }));
};
