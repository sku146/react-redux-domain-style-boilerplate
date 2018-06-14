import sysPath from 'path';

export default {
  protocol: 'http',
  host: 'localhost',
  port: 9001,
  publicPath: './',
  brands: [],
  journeys: ['boilerplate'],
  favIcon: {
    // https://github.com/jantimon/favicons-webpack-plugin
    logo: sysPath.resolve(process.cwd(), './src/assets/icons/favicon.png'),
    title: 'Nationwide Sample React Redux Boilerplate',
    inject: false,
    prefix: 'icons/',
  },
  assetsBundleLimit: 100000,
  prodBunldeOptions: {
    test: /\.js($|\?)/i,
    uglifyOptions: {
      ecma: 5,
      output: {
        comments: true,
        beautify: false,
      },
    },
  },
  htmlMinify: {
    // https://github.com/kangax/html-minifier#options-quick-reference
    removeComments: true,
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true,
  },
  inject: true,
  security: {
    enabled: true,
    frameBusting: {
      enabled: true,
    },
    contentSecurityPolicy: {
      'default-src': "'self'",
      'base-uri': "'self'",
      'style-src': ["'self'", "'unsafe-inline'"],
      'img-src': [
        "'self'",
      ],
      'worker-src': [
        "'self'",
      ],
      'frame-src': [
        "'self'",
      ],
      'script-src': [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
      ],
      'connect-src': [
        "'self'",
      ],
      'font-src': ["'self'",
        'data:',
        'https://smetrics.nationwide.co.uk/',
        'https://ctccdeextsecpayui.nbsctc.co.uk/',
      ],
    },
  },
  brandProperties: {
    default: {
      title: 'Nationwide Sample React Redux Boilerplate',
      brandName: '',
      basePath: '/',
      brandHome: 'https://www.nationwide.co.uk/',
      brandPrivacy: 'https://localhost:9001/',
    },
  },
};
