Package.describe({
  summary: 'Simple media queries for stylus.'
});

Package.on_test(function (api) {
  api.use(['tinytest', 'stylus', 'rupture', 'test-helpers', 'templating']);
  api.add_files([
    'rupture-tests.js',
    'rupture-tests.styl'
  ],'client');
});
