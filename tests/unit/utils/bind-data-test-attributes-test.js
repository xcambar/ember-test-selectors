import { module, test } from 'qunit';
import EmberObject, { computed } from '@ember/object';

import bindDataTestAttributes from 'ember-test-selectors/utils/bind-data-test-attributes';

module('Unit | Utility | bind data test attributes');

test('it adds missing attributeBindings array', function(assert) {
  let Fixture = EmberObject.extend({
    'data-test-from-factory': 'foo'
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar'
  });

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), [
    'data-test-from-invocation',
    'data-test-from-factory'
  ]);
});

test('it adds to existing attributeBindings array', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: ['foo', 'bar'],

    foo: 1,
    bar: 2,

    'data-test-from-factory': 'foo'
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar'
  });

  assert.deepEqual(instance.get('attributeBindings'), ['foo', 'bar']);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), [
    'foo',
    'bar',
    'data-test-from-invocation',
    'data-test-from-factory'
  ]);
});

test('it converts existing attributeBindings string to array', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: 'foo',

    foo: 1,

    'data-test-from-factory': 'foo'
  });
  let instance = Fixture.create({
    'data-test-from-invocation': 'bar'
  });

  assert.deepEqual(instance.get('attributeBindings'), 'foo');

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), [
    'foo',
    'data-test-from-invocation',
    'data-test-from-factory'
  ]);
});

test('it only adds data-test-* properties', function(assert) {
  let Fixture = EmberObject.extend({
    foo: 1,
    bar: 2,

    'data-test-from-factory': 'foo'
  });
  let instance = Fixture.create({
    baz: 3,

    'data-test-from-invocation': 'bar'
  });

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), [
    'data-test-from-invocation',
    'data-test-from-factory'
  ]);
});

test('it does not add a data-test property', function(assert) {
  let Fixture = EmberObject.extend({
    'data-test': 'foo'
  });
  let instance = Fixture.create();

  assert.deepEqual(instance.get('attributeBindings'), undefined);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), undefined);
});

test('it skips if attributeBindings is a computed property', function(assert) {
  let Fixture = EmberObject.extend({
    attributeBindings: computed('prop', function() {
      return [this.get('prop')];
    }).readOnly(),

    foo: 5,

    'data-test-from-factory': 'foo'
  });
  let instance = Fixture.create({
    prop: 'foo',

    'data-test-from-invocation': 'bar'
  });

  assert.deepEqual(instance.get('attributeBindings'), ['foo']);

  bindDataTestAttributes(instance);

  assert.deepEqual(instance.get('attributeBindings'), ['foo']);
});
