import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, type = 'text' }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      type={type}
      sx={{ marginBottom: 2 }}
    />
  );
};

export default InputField;
