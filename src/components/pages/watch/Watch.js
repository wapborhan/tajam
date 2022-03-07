import React, { Component } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import ReactPlayer from "react-player";

export default class Watch extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <section
        id="watch"
        style={{
          backgroundImage: `url("images/watch.jpg")`,
        }}
      >
        <div className="container">
          <div className="watch-sec">
            <div className="watch-btn">
              <a className="popup-youtube" onClick={this.toggleModal}>
                <FaRegPlayCircle />
              </a>

              <br />
            </div>
            <h2>WATCH OUR STORY</h2>
          </div>
        </div>
        <Modal size="lg" isOpen={this.state.isOpen}>
          <ModalHeader>Video</ModalHeader>
          <ModalBody>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Fx1Vh8h65uk&t=13s"
              width="740px"
              height="420px"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </section>
    );
  }
}
