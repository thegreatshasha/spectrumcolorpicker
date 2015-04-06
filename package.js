Package.describe({
  name: 'thegreatshasha:spectrumcolorpicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Spectrum color picker wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/thegreatshasha/spectrumcolorpicker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles([
    'spectrumcolorpicker.html',
    'spectrumcolorpicker.js'
  ], 'client');
});

// No need for tests since just a wrapper. Probably will add some later
// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('thegreatshasha:spectrumcolorpicker');
//   api.addFiles('spectrumcolorpicker-tests.js');
// });
