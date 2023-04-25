import DefaultLayout from "../layout/DefaultLayout";
import { useState, useEffect } from "react";
import "./index.css";
import Modal from "../modal/Modal";

export const AccountList = (props) => {

  const { username, userrole, email } = props

  const [modal, setModal] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState("");

  const handleEdit = (props) => {
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
      <p className="username">{username}</p>
      <p className="userrole">{userrole}</p>
      <p className="useremail">{email}</p>
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
          <div className="modal-content">
            <div className="modal-header">
            <h2>{selectedOperation} Account</h2>
          </div>
            <div className="edituser-content">
              <label>Username</label>
              <input className="input" type="text" />
              <label>E-mail</label>
              <input className="input" type="text" />
              <label>Role</label>
              <input className="input" type="text" />
              <br /> 
              <div className="modal-button">
                <button>SAVE CHANGE</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
function Account() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="accountmanagement">
      <div className="tablehead">
        <p className="namehead">username</p>
        <p className="rolehead">userrole</p>
        <p className="emailhead">email</p>
        <p className="edithead">modify</p>
        <p className="deletehead">delete</p>
      </div>
      <div className="allaccount">
        {users.map((user) => (
          <AccountList key={user.userId} username={user.userName} userrole={user.role} email={user.email} />
        ))}
      </div>
    </div>
  );
}

export default Account;
