import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container';

var ContainerContent = React.createClass({
  render() {
    return (
      <div style={{width: '200px'}}>
        <div style={{height: '25px', background: '#4DB6AC', padding: '5px'}}>Panel header</div>
        <div style={{padding: '5px'}}>
          Panel body
        </div>
      </div>
    );
  }
});

var RightContainer = React.createElement(Container, { type: 'panel', position: 'right', children: <ContainerContent />});
var LeftContainer = React.createElement(Container, { type: 'panel', position: 'left', children: <ContainerContent />});

function onClick(container, position, props) {
  var element = React.createElement(
    Container,
    {
      ...props,
      visible: !container.props.visible, children: <ContainerContent />
    }
  );
  render(element, position);
}

function render(container, position) {
  ReactDOM.render(
    <div >
      <h2>Panel positioned on the {position}</h2>
      <button onClick={() => onClick(container, position, { type: 'panel', position: position })}>Show</button>
      <div style={{position: 'relative', height: '230px'}}>
        {container}
      </div>
    </div>,
    document.getElementById('panel-' + position)
  );
}

render(RightContainer, 'right');
render(LeftContainer, 'left');
