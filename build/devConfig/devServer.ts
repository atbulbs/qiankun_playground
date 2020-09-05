import WebpackDevServer from 'webpack-dev-server'

const devServerConfig: WebpackDevServer.Configuration = {
  host: '0.0.0.0',
  port: 8006,
  overlay: {
    errors: true,
  },
  hot: true,
  useLocalIp: true,
  open: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  
}

module.exports = devServerConfig
