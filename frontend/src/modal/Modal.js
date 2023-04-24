import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ children , onClose }) {

  return (
      <div className="modal" style={{ display: "block" }}>
      <div onClick={onClose} className="overlay" />
        <div className="modal-content">
          {children}
          <button className="close-modal" onClick={onClose}>
            CLOSE
          </button>
        </div>
      </div>
  );
}
