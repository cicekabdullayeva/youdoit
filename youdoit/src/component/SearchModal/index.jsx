import { Modal, Form, Button } from "react-bootstrap";
const SearchModal = (visible, handleClose = () => {}) => {
  console.log(visible);
  return (
    <Modal show={visible} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Axtar</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Person
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Label>
          </Form.Group>
          <Button variant="primary" type="submit">
            Əlavə et
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default SearchModal;
