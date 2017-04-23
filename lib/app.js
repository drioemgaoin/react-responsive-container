import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container';

var ContainerContent = React.createClass({
  render() {
    const style = {
        width: this.props.width,
        height: this.props.height
      };
    return (
      <div style={style}>
        <div style={{height: '25px', background: '#4DB6AC', padding: '5px'}}>Panel header</div>
        <div style={{padding: '5px'}}>
          Panel body
        </div>
      </div>
    );
  }
});

var RightContainer = React.createElement(Container, { type: 'panel', position: 'right', children: <ContainerContent width='200' />});
var LeftContainer = React.createElement(Container, { type: 'panel', position: 'left', children: <ContainerContent width='200' />});
var TopContainer = React.createElement(Container, { type: 'panel', position: 'top', children: <ContainerContent height='200' />});

function onClick(container, position, props) {
  var width = position === 'right' || position === 'left' ? '200' : 'auto';
  var height = position === 'top' || position === 'bottom' ? '200' : 'auto';
  var element = React.createElement(
    Container,
    {
      ...props,
      visible: !container.props.visible, children: <ContainerContent width={width} height={height} />
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
render(TopContainer, 'top');
