/*jshint node:true*/
var StringTestSelectorsTransform = require('./strip-test-selectors');

module.exports = {
  name: 'test-selectors',

  included: function() {
    if (this.app.env === 'production') {
      this.app.registry.add('htmlbars-ast-plugin', {
        name: 'strip-test-selectors',
        plugin: StringTestSelectorsTransform
      });
    }
  }
};
