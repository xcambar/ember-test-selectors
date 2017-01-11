import { module, test } from 'qunit';

import testSelector from 'ember-test-selectors';

module('Unit | testSelector() from "ember-test-selectors"');

test('expands a selector name and attribute value corretly', function(assert) {
  assert.equal(testSelector('selector', 'welcome-text'), '[data-test-selector="welcome-text"]');
  assert.equal(testSelector('selector', 0), '[data-test-selector="0"]');
});

test('expands a selector name without attribute value corretly', function(assert) {
  assert.equal(testSelector('selector'), '[data-test-selector]');
});
