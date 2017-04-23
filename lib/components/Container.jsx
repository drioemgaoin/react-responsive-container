import React from 'react';
import bem from 'bem-classname';

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

  renderPanel() {
    return (
      <div className={this.className([this.props.position])}>
        {this.props.children}
      </div>
    );
  }

  renderModal() {
    return (
      <div>Container modal component</div>
    );
  }

  render() {
    if (this.props.visible) {
      if (this.props.type === 'panel') {
        return this.renderPanel();
      } else {
        return this.renderModal();
      }
    }

    return null;
  }
}
