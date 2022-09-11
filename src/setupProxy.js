// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware(
      {
        target: process.env.REACT_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {

        }
      }
    )
  );
}
