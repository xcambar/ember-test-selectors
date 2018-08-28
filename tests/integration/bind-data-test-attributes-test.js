import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
  'print-test-attributes',
  'StripTestSelectorsTransform plugin',
  {
    integration: true
  }
);

test('It throws an error when a data-test-attribute is added on a tagless component', function(assert) {
  assert.expect(1);
  assert.throws(function() {
    this.render(
      hbs`{{data-test-component tagName='' data-test-attribute=true}}`
    );
  }, 'Error is thrown properly on tagless component with data-attribute');
});
