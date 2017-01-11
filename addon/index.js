import Ember from 'ember';

export default function testSelector(key, value) {
  return Ember.isNone(value) ? `[data-test-${key}]` : `[data-test-${key}="${value}"]`;
}
