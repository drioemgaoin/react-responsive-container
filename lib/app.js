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
          <button onClick={this.props.onClick}>Close</button>
        </div>
      </div>
    );
  }
});

var RightContainer = React.createElement(Container, { type: 'panel', position: 'right' });
var LeftContainer = React.createElement(Container, { type: 'panel', position: 'left' });
var TopContainer = React.createElement(Container, { type: 'panel', position: 'top' });
var BottomContainer = React.createElement(Container, { type: 'panel', position: 'bottom' });
var ModalContainer = React.createElement(Container, { type: 'modal' });

function click(visible, type, position, props) {
  var width = position === 'right' || position === 'left' ? '200' : 'auto';
  var height = position === 'center' ||  position === 'top' || position === 'bottom' ? '200' : 'auto';
  var content = React.createElement(
      ContainerContent,
      {
        width: width,
        height: height,
        onClick: () => click(!visible, type, position, props)
      }
  );

  var element = React.createElement(
    Container,
    {
      ...props,
      visible: !visible,
      children: content
    }
  );
  render(element, type, position);
}

function render(container, type, position) {
  ReactDOM.render(
    <div >
      <h2>{type} positioned on the {position}</h2>
      <button onClick={() => click(container.props.visible, type, position, { type: type, position: position })}>Show</button>
      <div style={{position: 'relative', height: '230px'}}>
        {container}
      </div>
    </div>,
    document.getElementById(type + '-' + position)
  );
}

render(RightContainer, 'panel', 'right');
render(LeftContainer, 'panel', 'left');
render(TopContainer, 'panel', 'top');
render(BottomContainer, 'panel', 'bottom');
render(ModalContainer, 'modal', 'center');
