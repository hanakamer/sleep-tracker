import React from 'react';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/');
      }}
      name={'Home'}
    />
  );
}

export default HomeButton;
