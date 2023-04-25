import DefaultLayout from '../layout/DefaultLayout';
import {useState} from 'react'
import './index.css';
import Account from './account'
import Service from './service'
import UserModal from '../modal/UserModal';
import ServiceModal from '../modal/ServiceModal';


const option = {
  Account: Symbol("account"),
  Service: Symbol("service"),
}

function Admin() {

  const [adminoption, setOption] = useState(option.Account)
  const [adminModal, setAdminModal] = useState(false);
  const [serviceModal, setServiceModal] = useState(false)


  const handleClose = () => {
    setAdminModal(false);
    setServiceModal(false);
  };

  const handleCreateAdmin = () => {
    setAdminModal(true)
  }

  const handleCreateService = () => {
    setServiceModal(true)
  }


  return (
    <DefaultLayout>
      <div className='manageoption'>
          <a
            className={adminoption === option.Account ? 'present' : ''}
            href="#"
            onClick={() => setOption(option.Account)}
          >
            ACCOUNT MANAGEMENT
          </a>{' '}
          <a
            className={adminoption === option.Service ? 'present' : ''}
            href="#"
            onClick={() => setOption(option.Service)}
          >
            SERVICE MANAGEMENT
          </a>
          {adminoption === option.Account ? (
            <button type='submit' id='newacc' onClick={handleCreateAdmin}>+</button>
          ):(
            <button type='submit' id='newservice' onClick={handleCreateService}>+</button>
          )
        }
      </div>
      {adminModal && (
        <UserModal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create admin</h2>
            </div>
            <div className="edituser-content">
              <label>Username</label>
              <input className="input" type="text" />
              <label>Password</label>
              <input className="input" type="text" />
              <label>Email</label>
              <input className="input" type="text" />
              <br />
              <div className="modal-button">
                <button >CREATE ACCOUNT</button>
              </div>
            </div>
          </div>
        </UserModal>
      )
      }
      {serviceModal && (
        <ServiceModal onClose={handleClose}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create co-working</h2>
            </div>
            <div className="createscroll">
            <div className="editservice-content">
              <label>Place Name</label>
              <input className="input" type="text" />
              <label>Description</label>
              <input className="input" type="text" />
              <label>Rating</label>
              <input className="input" type="text" />
              <label>Seat</label>
              <input className="input" type="text" />
              <label>Parking</label>
              <input className="input" type="text" />
              <label>Free Wi-Fi</label>
              <input className="input" type="text" />
              <label>Charging</label>
              <input className="input" type="text" />
              <label>Food</label>
              <input className="input" type="text" />
              <label>Bakery</label>
              <input className="input" type="text" />
              <label>Meeting Room</label>
              <input className="input" type="text" />
              <label>Quiet Zone</label>
              <input className="input" type="text" />
              <label>Smoking Zone</label>
              <input className="input" type="text" />
              <label>Location</label>
              <input className="input" type="text" />
              <label>Map</label>
              <input className="input" type="text" />
              <label>Image</label>
              <input className="input" type="text" />
            </div>
            </div>
              <div className="modal-button">
                <button >CREATE CO-WORKING</button>
              </div>
            </div>
        </ServiceModal>
      )
      }
      {adminoption === option.Account ? (
        <Account />
      ):(
        <Service />
        )
      }
    </DefaultLayout>
  );
}

export default Admin;