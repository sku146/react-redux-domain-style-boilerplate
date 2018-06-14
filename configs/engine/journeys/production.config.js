import Assets from './assets';

export default {
  boilerplate: {
    entry: {
      app: ['./src/index.jsx'],
    },
    output: {
      foldersFilesMap: {
        scripts: {
          app: 'app.min',
        },
        css: {
          styles: 'app.min',
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
