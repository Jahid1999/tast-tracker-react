import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
function Example({show, onHide}) { 
  
    return (
      <>
        <Modal
          show={show}
          onHide={() => {onHide()}}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hello from Modal.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {onHide()}}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {onHide()}}>
            Save Changes
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
//   render(<Example />);
export default Example;