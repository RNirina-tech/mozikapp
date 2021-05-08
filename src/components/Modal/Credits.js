
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';

const { Text } = Navbar;

function Credit() {
    const [smShow, setSmShow] = useState(false);

    return(
        <>
            <Text onClick={() => setSmShow(true)}>Credits</Text>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                         Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    )
}

export default Credit;