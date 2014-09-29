Package.describe({
  summary: "jquery-ui packaged for meteor",
  version: "1.0.0",
  git: "https://github.com/fishdude/meteor-jquery-ui.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('fish:jquery-ui.js','client');
  api.addFiles('lib/jquery-ui.min.js','client');
  api.addFiles('lib/jquery-ui.min.css','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fish:jquery-ui');
  api.addFiles('fish:jquery-ui-tests.js');
});
