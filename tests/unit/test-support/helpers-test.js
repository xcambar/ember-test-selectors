import testSelector from 'dummy/tests/helpers/ember-test-selectors';
import { module, test } from 'qunit';

module('test-support helpers');

test('testSelector with a value', function(assert) {
  assert.equal(testSelector('selector', 'welcome-text'), '[data-test-selector="welcome-text"]');
});

test('testSelector without a value', function(assert) {
  assert.equal(testSelector('selector'), '[data-test-selector]');
});
