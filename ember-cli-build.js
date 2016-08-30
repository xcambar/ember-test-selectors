/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var StripTestSelectorsTransform = require('./strip-test-selectors');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    'ember-test-selectors': {
      environments: ['test']
    }
  });

  // add the StripTestSelectorsTransform to the registry, so the dummy app has
  // it added in the HTMLBars build pipeline: all data-test-* attributes are
  // therefore stripped
  app.registry.add('htmlbars-ast-plugin', {
    name: 'strip-test-selectors',
    plugin: StripTestSelectorsTransform
  });

  return app.toTree();
};
