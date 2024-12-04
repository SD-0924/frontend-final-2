import React from 'react';
import { Box, Typography, Container, FormControlLabel, Checkbox, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

const InputField = ({ label, type = 'text' }) => (
    <TextField
        label={label}
        variant="outlined"
        fullWidth
        type={type}
        sx={{ marginBottom: 2 }}
    />
);

const SignUpButton = () => (
    <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 2, marginTop: 2 }}>
        SIGN UP
    </Button>
);

export const SignUpPage = () => (
    <Container maxWidth="xs" sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

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
            <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center', marginBottom: 2 }}>
                Sign up
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <InputField label="First Name*" />
                <InputField label="Last Name*" />
            </Box>


            <InputField label="Email Address*" type="email" />


            <InputField label="Password*" type="password" />


            <FormControlLabel
                sx={{ color: 'grey' }}
                control={<Checkbox name="updates" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
            />


            <SignUpButton />


            <Typography variant="body2" sx={{ textAlign: 'right', marginTop: 0 }}>
                <Link to="/login" style={{ textDecoration: 'underline', color: '#1976d2' }}>
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
