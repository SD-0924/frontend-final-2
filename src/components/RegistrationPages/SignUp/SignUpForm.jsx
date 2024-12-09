import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import InputField from './InputField';
import SignUpButton from './SignUpButton';

const SignUpForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    role: 'user', // Default role
    phone: '+972519239123',
    dateOfBirth: '1990-01-01',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: 'Palestine Tulkarm Al fadilyah street',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  // React Query mutation for form submission
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign-up failed');
      }
  
      return response.json();
    },
    onSuccess: () => {
      setSuccessMessage('Sign-up successful!');
      setFormData({
        role: 'user',
        phone: '+972519239123',
        dateOfBirth: '1990-01-01',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: 'Palestine Tulkarm Al fadilyah street',
      });
    },
    onError: (error) => {
      alert(error.message); // Display error
    },
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // @ts-ignore
    mutation.mutate(formData);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: isSmallScreen ? 2 : 5,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, textAlign: 'center', marginBottom: 2 }}
        >
          Sign up
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            justifyContent: 'space-between',
            gap: isSmallScreen ? 2 : 1,
          }}
        >
          <InputField
            label="First Name*"
            value={formData.firstName}
            Name="firstName"
            onChange={handleInputChange}
          />
          <InputField
            label="Last Name*"
            value={formData.lastName}
            Name="lastName"
            onChange={handleInputChange}
          />
        </Box>

        <InputField
          label="Email Address*"
          type="email"
          value={formData.email}
          Name="email"
          onChange={handleInputChange}
        />

        <InputField
          label="Password*"
          type="password"
          value={formData.password}
          Name="password"
          onChange={handleInputChange}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="updates"
              // checked={}
              color="primary"
              onChange={handleInputChange}
            />
          }
          label="I want to receive inspiration, marketing promotions and updates via email."
        />

        {mutation.isError && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            {mutation.error.message}
          </Typography>
        )}

        {successMessage && (
          <Typography color="success" sx={{ marginBottom: 2 }}>
            {successMessage}
          </Typography>
        )}

        <SignUpButton onSubmit={handleSubmit} 
// @ts-ignore
        isLoading={mutation.isLoading} />

        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
          Already have an account?{' '}
          <a href="#" style={{ textDecoration: 'none' }}>
            Sign in
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;
