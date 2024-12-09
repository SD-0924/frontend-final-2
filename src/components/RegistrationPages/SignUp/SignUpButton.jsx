import React from 'react';
import { Button } from '@mui/material';

const SignUpButton = ({onSubmit}) => {
  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
      console.log('Sign up button clicked');
    }
  };
  return (
    <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 2 }} onClick={handleClick}>
      SIGN UP
    </Button>
  );
};

export default SignUpButton;
