export default function testSelector(key, value) {
  let selector;
  if (value) {
    selector = `[data-test-${key}="${value}"]`;
  } else {
    selector = `[data-test-${key}]`;
  }
  return selector;
};
