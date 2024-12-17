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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';


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
      maxWidth="xs"
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: isSmallScreen ? 2 : 5,
      }}
    >

      <Box
        sx={{
          display: 'flex',
          width: '50px',
          height: '50px',
          bgcolor: 'purple',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          '@media (max-width: 600px)': {
            width: '40px',
            height: '40px',
          },
        }}
      >
        <LockOutlinedIcon
          sx={{
            fontSize: '30px',
            '@media (max-width: 600px)': {
              fontSize: '24px',
            },

          }}
        />
      </Box>

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
              // color="primary"
              onChange={handleInputChange}
              // sx={{ my: 2}}
            />
          }
          label="I want to receive inspiration, marketing promotions and updates via email."
          sx={{
            color: 'primary', // Set the text color to gray
            marginBottom: 3 
          }}
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
          isLoading={mutation.isLoading}
        />

        <Typography variant="body2" sx={{ textAlign: 'right', marginTop: 1 }}>
          {/* Already have an account?{' '} */}
          <Link to="/login" style={{ textDecoration: 'underline', color: 'blue' }}>
            Already have an account? Sign in
          </Link>
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            marginTop: '50px',
            color: '#666666',
            fontSize: '0.9rem',
            '@media (max-width: 600px)': {
              marginTop: '30px',
              fontSize: '0.8rem',
            },
          }}
        >
          Copy right © <u>Your Website</u> 2024.
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUpForm;
