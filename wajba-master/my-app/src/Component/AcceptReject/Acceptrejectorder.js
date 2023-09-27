import React, { Component } from 'react';
import Modal from 'react-modal';

class OrderAcceptReject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      orderAccepted: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAcceptOrder = () => {
    // Handle order acceptance logic here (e.g., update the order status)
    // For simplicity, we'll just set orderAccepted to true
    this.setState({ orderAccepted: true });
    this.closeModal();
  };

  handleRejectOrder = () => {
    // Handle order rejection logic here (e.g., update the order status)
    // For simplicity, we'll just set orderAccepted to false
    this.setState({ orderAccepted: false });
    this.closeModal();
  };

  render() {
    const { isModalOpen, orderAccepted } = this.state;

    return (
      <div>
        <button onClick={this.openModal}>Open Popup</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Order Accept/Reject"
        >
          <h2>Accept or Reject Order</h2>
          <p>Do you want to accept or reject this order?</p>
          <button onClick={this.handleAcceptOrder}>Accept</button>
          <button onClick={this.handleRejectOrder}>Reject</button>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
        {orderAccepted && <p>Order Accepted</p>}
        {!orderAccepted && orderAccepted !== null && <p>Order Rejected</p>}
      </div>
    );
  }
}

export default OrderAcceptReject;
