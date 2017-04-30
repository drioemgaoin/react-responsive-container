# react responsive container

Get the AMD module located at `react-responsive-container.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactResponsiveContainer': 'react-responsive-container'
  }
});

require(['react', 'ReactResponsiveContainer'], function(React, ReactResponsiveContainer) {

  React.render(React.createElement(ReactResponsiveContainer), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;

## License

PUT LICENSE HERE

Copyright (c) 2017 Romain Diegoni.
