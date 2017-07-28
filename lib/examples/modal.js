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

          <p>Curabitur non ex suscipit, bibendum turpis sed, pretium turpis. Aliquam ullamcorper vulputate sem at tincidunt. Integer libero purus, egestas sed commodo ut, hendrerit vel felis. Quisque venenatis, felis eu dictum sagittis, erat odio porttitor dolor, et elementum nisl enim at tortor. Cras mollis dignissim tellus, in blandit erat. Etiam id cursus erat. Sed blandit lobortis lorem eget venenatis. Vestibulum efficitur cursus vulputate. Sed iaculis enim a dolor aliquet, ac semper ligula porta.</p>
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
