import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../components/Container';

let visible = false;

const ContainerContent = React.createClass({
  render() {
    const style = {
        width: 'auto',
        height: '200px'
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

let container = React.createElement(Container, { type: 'modal', visible: visible, children: <ContainerContent onClick={click} /> });

function click() {
    visible = !visible;
    container = React.createElement(Container, { type: 'modal', visible: visible, children: <ContainerContent onClick={click} /> });
    render();
}

function render() {
    ReactDOM.render(
      <div>
        <h2>Modal positioned on the center</h2>
        <button onClick={click}>Show</button>
        <div style={{position: 'relative', height: '230px'}}>
          {container}
        </div>
      </div>,
      document.getElementById('modal-center')
    );
}

render();
