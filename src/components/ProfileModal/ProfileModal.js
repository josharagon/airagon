import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./ProfileModal.scss";

const customStyles = {
  content: {
    background: "#1a1c21",
    overflow: "hidden",
  },
  overlay: {
    background: "rgba(28, 28, 28, 0.75)",
  },
};

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
      <button onClick={openModal}>
        <span id="add">+</span> New Profile
      </button>
      <Modal
        closeTimeoutMS={500}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="New Profile Modal"
      >
        <div className="modal-content">
          <div className="new-profile-header">
            <h1 id="add-profile-heading-one">add new profile</h1>
            <button onClick={closeModal} className="close-modal">
              &#10006;
            </button>
          </div>
          <div className="modal-info">
            <div className="address-information">
              <div className="shipping">
                <h4 className="new-profile-header">shipping Info</h4>
                <div className="names">
                  <input className="profile-input" placeholder="First Name" />
                  <input className="profile-input" placeholder="Last Name" />
                </div>
                <input className="profile-input" placeholder="Email" />
                <input className="profile-input" placeholder="Phone" />
                <input className="profile-input" placeholder="Street Address" />
                <input className="profile-input" placeholder="City" />
                <input className="profile-input" placeholder="State" />
                <input className="profile-input" placeholder="Zip Code" />
                <input className="profile-input" placeholder="Country" />
              </div>
              <div className="card">
                <h4 className="new-profile-header">card information</h4>
                <input
                  className="profile-input"
                  placeholder="Card Number"
                ></input>
                <div>
                  <input
                    className="profile-input"
                    placeholder="Card Month"
                  ></input>
                  <input
                    className="profile-input"
                    placeholder="Card Year"
                  ></input>
                </div>
                <input className="profile-input" placeholder="CVV"></input>
              </div>
            </div>
            <div className="card-information">
              <div>
                <div className="shipping">
                  <h4 className="new-profile-header">billing</h4>
                  <div className="names">
                    <input className="profile-input" placeholder="First Name" />
                    <input className="profile-input" placeholder="Last Name" />
                  </div>
                  <input className="profile-input" placeholder="Email" />
                  <input className="profile-input" placeholder="Phone" />
                  <input
                    className="profile-input"
                    placeholder="Street Address"
                  />
                  <input className="profile-input" placeholder="City" />
                  <input className="profile-input" placeholder="State" />
                  <input className="profile-input" placeholder="Zip Code" />
                  <input className="profile-input" placeholder="Country" />
                </div>
              </div>
              <div className="bottom-section">
                <h4 className="new-profile-header">profile</h4>
                <input
                  className="profile-input"
                  placeholder="Profile Name"
                ></input>
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileModal;
