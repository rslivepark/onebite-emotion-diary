import React from 'react';
import './Notfound.css';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div id='container'>
      <h1>404</h1>

      <h3>Looks like the page you're looking for doesn't exist.</h3>

      <p onClick={goToHome}>Take me back home</p>
    </div>
  );
};

export default Notfound;
