import React from 'react';
import { Box, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';
import InputField from './InputField';
import SignUpButton from './SignUpButton';

const SignUpForm = () => {
  return (
    <Container maxWidth="sm" sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center', marginBottom: 2 }}>
          Sign up
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <InputField label="First Name*" />
          <InputField label="Last Name*" />
        </Box>

        <InputField label="Email Address*" type="email" />

        <InputField label="Password*" type="password" />

        <FormControlLabel
          control={<Checkbox name="updates" color="primary" />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />

        <SignUpButton />

        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
          Already have an account? <a href="#" style={{ textDecoration: 'none' }}>Sign in</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;
