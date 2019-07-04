/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class GameEndModal extends Component {
    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Modal isOpen={this.props.isOpen}>
                    <ModalHeader>{this.props.modalText}</ModalHeader>
                    <ModalFooter>
                        <Button color="primary" onClick={this.props.closeModal}>Play Again</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default GameEndModal;