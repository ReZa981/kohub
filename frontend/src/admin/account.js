import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import "./index.css";
import Modal from "../modal/Modal";

export const AccountList = () => {
  const [modal, setModal] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState("");

  const handleEdit = () => {
    console.log("edit");
    setSelectedOperation("Edit");
    setModal(true);
    console.log(modal);
  };

  const handleDelete = () => {
    setSelectedOperation("Delete");
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className="listinfo">
      <p className="username">username</p>
      <p className="userrole">userrole</p>
      <p className="update">update</p>
      <button type="submit" id="edit" onClick={handleEdit}>
        <img
          src={`${process.env.PUBLIC_URL}/modify.png`}
          alt="manageop"
          className="manageop"
        />
      </button>
      <button type="submit" id="delete">
        <img
          src={`${process.env.PUBLIC_URL}/delete.png`}
          alt="manageop"
          className="manageop"
        />
      </button>
      {modal && (
        <Modal onClose={handleClose}>
          <div className="modal-header">
            <h2>{selectedOperation} Account</h2>
          </div>
          <div className="modal-content">
            <div className="edituser-content">
              <label>Username</label>
              <input className="input" type="text" placeholder="username" />
              <label>E-mail</label>
              <input className="input" type="text" placeholder="userrole" />
              <label>Role</label>
              <input className="input" type="text" placeholder="userrole" />
              <br /> 
              <div className="modal-button">
                <button></button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
function Account() {
  return (
    <div className="accountmanagement">
      <div className="tablehead">
        <p classname="username">username</p>
        <p classname="userrole">userrole</p>
        <p classname="update">last update</p>
        <p classname="edit">modify</p>
        <p classname="delete">delete</p>
      </div>
      <div className="allaccount">
        <AccountList />
      </div>
    </div>
  );
}

export default Account;
