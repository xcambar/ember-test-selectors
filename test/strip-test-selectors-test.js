'use strict';

var fs = require('fs');
var assert = require('assert');
var HtmlbarsCompiler = require('ember-cli-htmlbars');
var StripTestSelectorsTransform = require('../index');

describe('StripTestSelectorsTransform', function(){
  var sourcePath = 'test/fixtures';

  it('strips out attributes starting with "data-test-"', function() {
    var templateTree = new HtmlbarsCompiler('test/fixtures', {
      isHTMLBars: true,

      // provide the templateCompiler that is paired with your Ember version
      templateCompiler: require('../bower_components/ember/ember-template-compiler')
    });

    debugger;
    console.log(templateTree.compile());
    assert.ok(StripTestSelectorsTransform);
  });
});