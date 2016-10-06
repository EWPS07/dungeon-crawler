import React from 'react'
import ReactDOM from 'react-dom'

import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import Popover from 'react-bootstrap/lib/Popover'

const Greeting = React.createClass({
  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },  

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    return (
      <div>
        <Modal id='greeting'show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to the dungeon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <p>
           	Use the arrow keys to navigate, and the spacebar to interact with items and enemies
           </p>
           <h4>Beware, there is poison gas in the dungeon!</h4>
          </Modal.Body>
          <Modal.Footer onClick={this.close}>
            <Button id='playBtn'onClick={this.props.play}>Play Now</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
})

export default Greeting
