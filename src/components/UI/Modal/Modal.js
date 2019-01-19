import React, { Component } from 'react';
import ModalStyle from './ModalStyle';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== this.props.show;
  // }

  // componentWillUpdate() {
  //   console.log('[Modal] WillUpdate');
  // }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed}
        />
        <ModalStyle
          style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0' }}
        >
          {this.props.children}
        </ModalStyle>
      </Aux>
    );
  }
}

export default Modal;
