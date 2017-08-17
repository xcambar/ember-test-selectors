const expect = require('chai').expect;
const denodeify = require('denodeify');
const request = denodeify(require('request'));
const AddonTestApp = require('ember-cli-addon-tests').AddonTestApp;

describe('when not stripping "data-test-" attributes', function() {
  this.timeout(3000000);

  let app;

  before(function() {
    app = new AddonTestApp();

    return app.create('ember-app').then(() => app.startServer());
  });

  after(function() {
    return app.stopServer();
  });

  it('does not strip data-test-* attributes from components with single positional params', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.contain('\\"data-test-positional\\"');
    });
  });
});

describe('when stripping "data-test-" attributes', function() {
  this.timeout(30000000);

  let app;

  before(function() {
    app = new AddonTestApp();

    return app.create('ember-app').then(() => {
      return app.startServer({
        additionalArguments: ['-prod']
      })
    });
  });

  after(function() {
    return app.stopServer();
  });

  it('strips data-test-* attributes from components with single positional params', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-positional\\"');
    });
  });

  it('strips data-test-* attributes from components with positional params data-test-* as first param', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-multi-positional-first\\"');
    });
  });

  it('strips data-test-* attributes from components with multiple positional params', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-multi-positional-last\\"');
    });
  });

  it('strips data-test-* attributes from components with block and multiple positional params', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-block-multi-positional\\"');
    });
  });

  it('strips data-test-* attributes from components', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-attr\\"');
    });
  });

  it('strips data-test-* attributes from components in block form', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-block-attr\\"');
    });
  });

  it('works with multiple data-test-* attributes on components', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-multi-attr-first\\"');
      expect(response.body).to.not.contain('\\"data-test-multi-attr-last\\"');
    });
  });

  it('leaves other data attributes untouched, when a data-test-* attribute is present as well on components', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.not.contain('\\"data-test-multi-attr\\"');
      expect(response.body).to.contain('\\"data-non-test-multi-attr\\"');
    });
  });

  it('leaves "data-test" attributes untouched on components', function() {
    return request('http://localhost:49741/assets/ember-app.js').then(response => {
      expect(response.body).to.contain('\\"data-test\\"');
    });
  });
});