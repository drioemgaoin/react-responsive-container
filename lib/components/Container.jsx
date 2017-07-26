import React from 'react';
import bem from 'bem-classname';
import classnames from 'classnames';

import {ContainerEnum} from '../constant';
import '../container';

export default class Container extends React.Component {
    static defaultProps = {
        type: 'modal',
        position: 'center',
        visible: false
    };

    constructor(props) {
        super(props);

        this.state = { visible: this.props.visible };
    }

    open() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    renderPanel() {
        const className = classnames('container__panel', this.props.classname);
        return (
            <div className={bem('container__panel', [this.props.position])}>
                {this.props.children}
            </div>
        );
    }

    renderModal() {
        const className = classnames('container__modal', this.props.classname);
        return (
            <div className={className}>
                <div className='container__modal__dialog'>
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
