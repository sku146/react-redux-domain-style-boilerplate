export default {
  configs: [
    'configs/engine/**/*.js',
  ],
  base: [
    'src/**/*(!.spec).{js,jsx}',
  ],
  test: [
    '(src|spec)/**/*.spec.{js,jsx}',
  ],
  style: [
    'src/**/*.less',
  ],
};
