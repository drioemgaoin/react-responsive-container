import React from 'react/addons';
import ReactResponsiveContainer from '../lib/react-responsive-container.jsx';

describe('ReactResponsiveContainer', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactResponsiveContainer/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-responsive-container');
  });
});
