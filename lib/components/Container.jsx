import React from 'react';
import bem from 'bem-classname';

import {ContainerEnum} from '../constant';
import '../container.less';

export default class Container extends React.Component {
  static defaultProps = {
    type: 'modal',
    position: 'center',
    visible: false
  };

  constructor(props) {
    super(props);

    this.className = bem.bind(null, this.constructor.name);
    this.state = { visible: this.props.visible };
  }

  open() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  renderPanel() {
    return (
      <div className={this.className('Panel', [this.props.position])}>
        {this.props.children}
      </div>
    );
  }

  renderModal() {
    return (
      <div className={this.className('Modal')}>
        <div className={this.className('Modal__Dialog')}>
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.visible) {
      if (this.props.type === ContainerEnum.Panel) {
        return this.renderPanel();
      } else {
        return this.renderModal();
      }
    }

    return null;
  }
}
