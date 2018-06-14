import common from '../common.config';
import Assets from './assets';

export default {
  boilerplate: {
    entry: {
      app: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?${common.protocol}://${common.host}:${common.port}/`,
        'webpack/hot/only-dev-server',
        './src/index.jsx',
      ],
    },
    output: {
      foldersFilesMap: {
        scripts: {
          app: 'app',
        },
        css: {
          styles: 'app',
        },
      },
    },
    htmlOutput: {
      fileName: 'index.html',
      template: 'src/index.ejs',
    },
    copy: Assets,
  },
};
