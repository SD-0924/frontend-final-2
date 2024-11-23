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

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember me:', rememberMe);
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
                        sx={{
                            marginTop: '24px',
                            marginBottom: '16px',
                            '@media (max-width: 600px)': {
                                fontSize: '0.9rem',
                                padding: '10px',
                            },
                        }}
                    >
                        SIGN IN
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
