import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function UserDetails(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Phone Number :{props.data.number}</p>
                    <p>Date of Birth :{props.data.DOB}</p>{" "}
                    <p> Certificaates :{props.data.certificate.name}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserDetails;
