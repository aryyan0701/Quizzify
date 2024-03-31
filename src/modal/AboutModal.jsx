import React from "react";
import Modal from "react-modal";

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="About Quizzify"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>About Quizzify</h2>
        <p>Welcome to Quizzify, your go-to platform for quizzes on various topics!</p>
        <p>Here at Quizzify, we aim to provide an engaging and educational experience for users of all ages.</p>
        <p>Whether you're looking to test your knowledge, learn something new, or just have fun, Quizzify has something for everyone.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default AboutModal;
