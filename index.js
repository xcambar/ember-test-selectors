/*jshint node:true*/
var StringTestSelectorsTransform = require('./strip-test-selectors');

module.exports = {
  name: 'test-selectors',

  included: function() {
    if (this.app.env !== 'development' && this.app.env !== 'test') {
      this.app.registry.add('htmlbars-ast-plugin', {
        name: 'strip-test-selectors',
        plugin: StringTestSelectorsTransform
      });
    }
  }
};
