# 0.3.5

* Fixed template transform caching which caused selectors to appear in production builds (#128)

# 0.3.4

* Added support for using test selectors in addon components (#116)

# 0.3.3

* Fixed support for `ember-cli-babel@6` (#102)

# 0.3.2

* Revert `test-support` refactoring (#92)

# 0.3.1

* Strip positional `data-test-*` attributes too (#88)
* Move library sources to `test-support` tree (#89)

# 0.3.0

* Added support for `ember-cli-babel@6` (#86)

# 0.2.1

* Fixed support for Ember 2.11+ which is freezing `attributeBindings` now (#59)

# 0.2.0

* Added support for `data-test-*` attributes without values on components (#55)

# 0.1.1

* Replaced initializer with IIFE in the vendor tree which fixes
  usage in integration tests (#52)
* Added warning when tagName is empty and data-test-* attributes are used (#53)

# 0.1.0

* Removed unnecessary `lodash` dependency (#37)
* Added `data-test-*` attribute stripping to component and helper
  invocations in Handlebars files (#40)
* Added `strip` and deprecated `environments` options (#42)
* Added automatic binding for `data-test-*` properties in components (#27)
* Simplified `testSelector()` import to `ember-test-helpers` (#43)
* Added Babel plugin that automatically removed `data-test-*` keys from
  all objects including components and controllers (#45) 

# 0.0.5

* the `testSelector` helper now treats empty but non-none values (like `0`)
  correctly, see #24.

# 0.0.4 

* Fixed a caching warning, see #22.
* Fixed and improved tests, see #22.

# 0.0.3

* The environments that ember-test-selectors strips `data-test-*` attributes
  for can now be configured, see #14.
* Fix the `package.json` to include the correct repository URL, see #16.

# 0.0.2

* Add the `testSelector` test helper that makes generating `data` attribute
  based selectors easier, see #12.

# 0.0.1

initial release
