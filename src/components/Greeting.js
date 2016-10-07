import React from 'react'
import ReactDOM from 'react-dom'

import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'

const Greeting = React.createClass({
  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },  

  render() {
    return (
      <div>
        <Modal className='greeting'show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Welcome to the dungeon</Modal.Title>
          </Modal.Header>
          <Modal.Body className='greeting text-center'>
       		<h4>How to play</h4>
       		<p>Use the arrow keys to navigate your way through the dungeon.</p>
       		<p>There are many dangerous enemies hiding in the dark, as well as usful items to help you defeat them.</p>
       		<p>In addition to live enemies, there is also an ongoing poison gas leak, and also items to help you deal with that.</p>
       		<p>To fight an enemy, or to pick up an item, use the spacebar.</p>
       		<p>Any items you pick up while exploring will update in the information bar at the top of the page. From there, you can access your tools.</p>
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
