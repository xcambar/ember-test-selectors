/*jshint node:true*/
var _ = require('lodash/lodash');

var TEST_SELECTOR_PREFIX = /data-test-.*/;

function StripTestSelectorsTransform() {
  this.syntax = null;
}

StripTestSelectorsTransform.prototype.transform = function(ast) {
  var walker = new this.syntax.Walker();

  walker.visit(ast, function(node) {
    if (node.type === 'ElementNode') {
      var attributesToDelete = [];
      node.attributes.forEach(function(attribute) {
        if (TEST_SELECTOR_PREFIX.test(attribute.name)) {
          attributesToDelete.push(attribute.name);
        }
      });

      if (attributesToDelete.length > 0) {
        _.remove(node.attributes, function(attribute) {
          return _.includes(attributesToDelete, attribute.name);
        });
      }
    }
  });

  return ast;
};

module.exports = StripTestSelectorsTransform;
