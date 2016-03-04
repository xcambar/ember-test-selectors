[![Build Status](https://travis-ci.org/simplabs/ember-test-selectors.svg?branch=master)](https://travis-ci.org/simplabs/ember-test-selectors)

# ember-test-selectors

This Ember CLI Addon __removes all HTML 5 data attributes starting with
`data-test-` in the `production` environment__. That allows using data
attributes as element selectors in integration and acceptance tests without
polluting the markup that is delivered to the end user.

## Installation

```bash
ember install ember-test-selectors
```

## Why use `data` attributes as test selectors?

Integration and acceptance tests usually __interact with and assert on the
presence of certain elements__ in the markup that an application renders. These
elements are identified using CSS selectors. Most projects use one of three
approaches for CSS selectors in tests:

### Selectors based on HTML structure

This approach simply selects elements by their position in the rendered HTML.
For the following template:

```html
<article>
  <h1>Post Title</h1>
  <p>Post Body…</p<>
</article>
```

one might select the post's title with the selector `article h1`. Of course
this breaks when changing the `<h1>` to a `<h2>` while the functionality being
tested is probably not affected by that change.

### Selectors based on CSS classes

This approach selects elements by CSS classes. For the following template:

```hbs
<article>
  <h1 class="post-title">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

one might select the post title with the selector `.post-title`. This of course
breaks when the CSS class is changed or renamed, although that would only be a
visual change which shouldn't affect the tests at all.

Many projects use special CSS classes that are only used for testing to
overcome this problem like `js-post-title`. While that approach is definitely
more stable it is often hard to maintain. Also it is very hard to encode
additional information in these CSS classes like e.g. the post's id.

### Selectors based on `data` attributes

This approach uses HTML 5 `data` attributes to select elements. For the
following template:

```hbs
<article>
  <h1 data-test-selector="post-title">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

one would select the post's title with the selector
`*[data-test-selector="post-title"]`. While the selector is arguably a bit
longer this approach clearly separates the test selectors from the rest of the
markup and is resilient to change as it would simply be applied to the element
rendering the post's title, regardless of the HTML structure, CSS classes etc.
Also it allows to encode more data in the markup like e.g. the post's id:

```hbs
<article>
  <h1 data-test-selector="post-title" data-test-resource-id="{{post.id}}">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

`ember-test-selectors` makes sure to remove all these `data` attributes in the
`production` environment so that __users will have perfectly clean HTML
delivered__:

```html
<article>
  <h1>My great post</h1>
  <p>Bla bla…</p>
</article>
```

## License

ember-test-selectors is developed by and &copy;
[simplabs GmbH](http://simplabs.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
