import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Row from '../components/Row';
import money from '../assets/money.jpg';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userValues, setUserValues] = useState({
    name: '',
    email: '',
    password: '',
    isMember: true,
  });
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  const toggleIsMemberRegister = () => {
    setUserValues({ ...userValues, isMember: false });
  };

  const toggleIsMemberLogin = () => {
    setUserValues({ ...userValues, isMember: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, isMember } = userValues;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please provide the information');
    }
    if (isMember) {
      // login
    }
    dispatch(registerUser({ email, password, name }));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  }, [user, navigate]);
  console.log(typeof user?.token);
  return (
    <Wrapper>
      <div className='banner'></div>
      {/* img container */}
      <div className='form-container'>
        {/* LOGO */}
        <form className='form'>
          <div className='btn-container'>
            <button
              className={`btn change-btn ${
                !userValues.isMember ? 'active' : null
              }`}
              type='button'
              onClick={toggleIsMemberRegister}
            >
              Register
            </button>
            <button
              className={`btn change-btn ${userValues.isMember && 'active'}`}
              type='button'
              onClick={toggleIsMemberLogin}
            >
              Login
            </button>
          </div>
          <div className='form-center register-form'>
            {!userValues.isMember && (
              <Row
                type='text'
                name='name'
                value={userValues.name}
                handleChange={handleChange}
              />
            )}
            <Row
              type='email'
              name='email'
              value={userValues.email}
              handleChange={handleChange}
            />
            <Row
              type='password'
              name='password'
              value={userValues.password}
              handleChange={handleChange}
            />
            <button
              type='submit'
              className=' btn btn-block btn-submit'
              onClick={handleSubmit}
            >
              {userValues.isMember ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
      </div>
      {/* form container */}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .banner {
    display: none;
  }
  .form {
    border-top: 3px solid var(--primary-500);
    border-bottom: 3px solid var(--primary-500);
    width: 90vw;
    margin: 0 auto;
    max-width: 25rem;
  }
  .btn-submit {
    width: 100%;
    margin-top: 1rem;
  }
  .change-btn {
    position: relative;
    color: var(--gray-500);
  }
  .change-btn::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 2px;
    transform: scale(0);
    background-color: var(--primary-500);
    transition: var(--transition);
  }
  .btn-container {
    text-align: center;
    .btn {
      background-color: transparent;
      box-shadow: none;
    }
  }
  .active {
    color: var(--primary-500);
    font-weight: 600;
  }
  .change-btn:hover::after {
    transform: scale(1);
  }
  .register-form {
    display: block;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    .banner {
      display: block;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),
        url(${money}) center/cover no-repeat;
    }
  }
`;
export default Register;
