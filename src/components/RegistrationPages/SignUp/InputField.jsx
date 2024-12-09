import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, type = 'text', value, onChange,Name }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      type={type}
      sx={{ marginBottom: 2 }}
      value={value}
      onChange={onChange}
      name={Name}
    />
  );
};

export default InputField;
