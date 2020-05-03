import React, { Component } from 'react';
import { Modal } from 'reusable-react-components';
import Button from './Button';
import './Modal.styles.css';

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  onClose() {
    this.setState({
      open: false,
    });
  }
  render() {
    const { children, content } = this.props;
    return (
      <>
        <div className='container'>
          <Button onClick={() => this.setState({ open: true })}>
            {children}
          </Button>
        </div>
        <div className='modal'>
          <Modal
            dialog
            open={this.state.open}
            onClose={() => this.onClose()}
          >
            {content}
          </Modal>
        </div>
      </>
    );
  }
}

export default ModalExample;
