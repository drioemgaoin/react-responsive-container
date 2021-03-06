import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../index';
import {PositionEnum, ContainerEnum} from '../constant';
import './example.less';

let visible = false;

const ContainerContent = React.createClass({
  render() {
    const style = {
        width: '200px',
        height: 'auto'
      };
    return (
      <div className='Content--Left'>
        <div className='Content__Header'>
            Panel header
            <button type="button" onClick={this.props.onClick}>×</button>
        </div>
        <div className='Content__Body'>
          Panel body
        </div>
      </div>
    );
  }
});

let container = React.createElement(Container, { type: ContainerEnum.Panel, position: PositionEnum.Left, visible: visible, children: <ContainerContent onClick={click} /> });

function click() {
    visible = !visible;
    container = React.createElement(Container, { type: ContainerEnum.Panel, position: PositionEnum.Left, visible: visible, children: <ContainerContent onClick={click} /> });
    render();
}

function render() {
    ReactDOM.render(
      <div className='Page'>
        <h2>Panel positioned on the left</h2>
        <button onClick={click}>Show</button>
        <div className='Page__Container'>
          {container}
        </div>
      </div>,
      document.getElementById('panel-left')
    );
}

render();
