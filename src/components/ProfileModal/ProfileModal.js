import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./ProfileModal.css";

Modal.setAppElement("#root");

const ProfileModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="New Profile Modal"
      >
        <div className="new-profile-header">
          <h1>add new profile</h1>
          <button onClick={closeModal} className="close-modal">
            &#10006;
          </button>
        </div>
        <div className="address-information">
          <div className="shipping">
            <h4>Shipping Info</h4>
            <div className="names">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input placeholder="Email" />
            <input placeholder="Phone" />
            <input placeholder="Street Address" />
            <div>
              <input placeholder="City" />
              <input placeholder="State" />
            </div>
            <div>
              <input placeholder="Zip Code" />
              <input placeholder="Country" />
            </div>
          </div>
          <div className="shipping">
            <h4>billing</h4>
            <div className="names">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
            </div>
            <input placeholder="Email" />
            <input placeholder="Phone" />
            <input placeholder="Street Address" />
            <div>
              <input placeholder="City" />
              <input placeholder="State" />
            </div>
            <div>
              <input placeholder="Zip Code" />
              <input placeholder="Country" />
            </div>
          </div>
        </div>

        <h4>Card Information</h4>
        <input placeholder="Card Number"></input>
        <div>
          <input placeholder="Card Month"></input>
          <input placeholder="Card Year"></input>
        </div>
        <input placeholder="CVV"></input>
      </Modal>
    </div>
  );
};

export default ProfileModal;
