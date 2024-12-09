import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom'; 

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const role = 'user';
  const navigate = useNavigate();

  // React Query mutation for login
  const loginMutation = useMutation({
    // @ts-ignore
    mutationFn: async ({ email, password, role }) => {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      return response.json();
    },
    onSuccess: (data) => {
      // Handle successful login (e.g., store token, redirect user)
      console.log('Login successful:', data);
      if (rememberMe) {
        localStorage.setItem('token', data.token);
      } else {
        sessionStorage.setItem('token', data.token);
      }

      // Redirect to home page
      navigate('/');
    },
    onError: (error) => {
      // Handle login error
      alert(error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Trigger the mutation
    // @ts-ignore
    loginMutation.mutate({ email, password, role });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '64px',
          '@media (max-width: 600px)': {
            marginTop: '32px',
          },
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

        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontSize: '1.5rem',
            '@media (max-width: 600px)': {
              fontSize: '1.25rem',
            },
          }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '24px' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // @ts-ignore
            disabled={loginMutation.isLoading} // Disable button while loading
            sx={{
              marginTop: '24px',
              marginBottom: '16px',
              '@media (max-width: 600px)': {
                fontSize: '0.9rem',
                padding: '10px',
              },
            }}
          >
            {loginMutation.
// @ts-ignore
            isLoading ? 'Signing in...' : 'SIGN IN'}
          </Button>
          <Box
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                gap: '10px',
              },
            }}
          >
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
            <Link href="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Box>
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
      </Box>
    </Container>
  );
};
