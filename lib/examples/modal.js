import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../components/Container';
import './example.less';

let visible = false;

const ContainerContent = React.createClass({
  render() {
    return (
      <div className='Content--Right'>
        <div className='Content__Header'>
            Panel header
        </div>
        <div className='Content__Body'>
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
