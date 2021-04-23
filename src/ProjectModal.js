import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ProjectModal.css";
const ProjectModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img
        src={props.imageSource}
        alt={props.imageAlt}
        className="projectImage"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.projectTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.projectContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectModal;
