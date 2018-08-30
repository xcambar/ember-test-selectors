import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import config from 'dummy/config/environment';

moduleForComponent(
  'print-test-attributes',
  'StripTestSelectorsTransform plugin',
  {
    integration: true
  }
);

if (!config.stripTestSelectors) {
  test('It throws an error when a data-test-attribute is added on a tagless component', function(assert) {
    assert.expect(1);
    assert.expectAssertion(
      () => {
        this.render(
          hbs`{{data-test-component tagName='' data-test-attribute=true}}`
        );
      },
      'Assertion Failed: ember-test-selectors could not bind data-test-* properties on <dummy@component:data-test-component::ember495> automatically because tagName is empty.',
      'Error is thrown properly on tagless component with data-attribute'
    );
  });
} else {
  test('it doest not throw an error when stripTestSelectors is set to true in the config', function(assert) {
    this.render(
      hbs`{{data-test-component tagName=''  data-test-attribute=true}}`
    );
    assert
      .dom('[data-test-attribute]')
      .doesNotExist('data-test-attribute was stripped, so no error is thrown');
  });
}
