import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { toast } from 'react-toastify';
import { MdClose } from 'react-icons/md';
import { updateUser } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
const UpdateProfile = ({ showUpdateProfile, setShowUpdateProfile }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [newUser, setNewUser] = React.useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const { name, email } = newUser;
    if (!name || !email) {
      toast.error('Please fill the form');
      // return;
    }
    dispatch(updateUser({ email, name }));
  };

  return (
    <Wrapper>
      <div
        className={`${
          showUpdateProfile ? 'add-profile show-profile' : 'add-profile'
        }`}
      >
        <div className='add-profile-container'>
          <button
            className='btn close-btn'
            onClick={() => setShowUpdateProfile(!showUpdateProfile)}
          >
            <MdClose />
          </button>
          <h3>Update Profile</h3>
          <form className='form'>
            <Row
              type='text'
              name='name'
              value={newUser.name}
              handleChange={handleChange}
            />
            <Row
              type='email'
              name='email'
              value={newUser.email}
              handleChange={handleChange}
            />
            <button
              button='submit'
              className='btn btn-block'
              onClick={submitForm}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .add-profile {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
    visibility: hidden;
    transform: scale(0);
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .show-profile {
    z-index: 3;
    transform: scale(1);
    visibility: visible;
  }

  .add-profile-container {
    width: 90vw;
    max-width: 30rem;
    background-color: var(--white);
    padding: 2rem 1rem;
    position: relative;
    form {
      padding: 1rem 2rem;
      box-shadow: none;
    }
  }

  h3 {
    text-align: center;
  }

  .btn-block {
    width: 100%;
    margin-top: 1rem;
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;
export default UpdateProfile;
