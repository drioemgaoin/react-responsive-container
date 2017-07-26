import React from 'react';
import ReactDOM from 'react-dom';

import Container from '../index';
import {ContainerEnum} from '../constant';
import './example.less';

let visible = false;

const ContainerContent = React.createClass({
  render() {
    return (
      <div className='Content'>
        <div className='Content__Header'>
            Panel header
            <button type="button" onClick={this.props.onClick}>×</button>
        </div>
        <div className='Content__Body'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac ornare metus. Duis luctus consequat consectetur. Integer eleifend metus et condimentum rutrum. Nam vel laoreet diam, in gravida metus. Etiam sagittis diam nec lacus sodales, id hendrerit quam convallis. Proin finibus pretium commodo. Nam et luctus metus. Nulla vitae augue est. Donec vitae tristique urna, id cursus nunc.</p>

         </div>
        <div className='Content__Footer'>
          <button onClick={this.props.onClick}>Close</button>
        </div>
      </div>
    );
  }
});

let container = React.createElement(Container, { type: ContainerEnum.Modal, visible: visible, children: <ContainerContent onClick={click} /> });

function click() {
    visible = !visible;
    container = React.createElement(Container, { type: ContainerEnum.Modal, visible: visible, children: <ContainerContent onClick={click} /> });
    render();
}

function render() {
    ReactDOM.render(
      <div className='Page'>
        <h2>Modal positioned on the center</h2>
        <button onClick={click}>Show</button>
        <div className='Page__Container'>
          {container}
        </div>
      </div>,
      document.getElementById('modal-center')
    );
}

render();
