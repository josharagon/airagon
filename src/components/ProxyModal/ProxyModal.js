import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./ProxyModal.scss";

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

const ProxyModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [proxyList, setProxyList] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Add Proxies</button>
      <Modal
        closeTimeoutMS={500}
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="New Proxy Modal"
      >
        <div className="modal-content">
          <div className="new-profile-header">
            <h1 id="add-profile-heading-one">add new proxies</h1>
            <button onClick={closeModal} className="close-modal">
              &#10006;
            </button>
          </div>
          <div className="modal-infoo">
            <textarea
              rows="20"
              cols="50"
              placeholder="ip:password:port"
              value={proxyList}
              onChange={(e) => {
                setProxyList(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="new-profile-footer">
            <button disabled={!proxyList.length}>Save</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProxyModal;
