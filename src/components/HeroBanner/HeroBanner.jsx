import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HeroBanner = () => {
    return (
        <Container>
            <Box
                sx={{
                    position: 'relative',
                    textAlign: 'center',
                    color: 'white',
                    width: '100%',
                    // width: '1436px',
                    // height: '514px',
                    margin: '0',
                    // alignSelf: 'center',
                    overflow: 'hidden',
                }}
            >
                {/* Hero Image */}
                <Box
                    component="img"
                    src="/images/HeroBanner.png"
                    alt="Handbag"
                    sx={{
                        width: '100%',
                        height: 440,
                        objectFit: 'cover',
                        borderRadius: '40px',
                        marginBottom: '50px',
                    }}
                />

                {/* CARRY YOUR FUNK */}
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(222, 222, 222, 0.7)',
                        //   backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        padding: '30px 40px',
                        paddingRight: '210px',
                        //   padding: '100px 20px',
                        borderBottomLeftRadius: '20px',
                        borderTopLeftRadius: '20px',
                        width: '759px',
                        height: '316px',
                    }}
                >
                    <Typography
                        variant="h1"
                        color='#1b4b66'
                        fontSize={'55px'}
                        gutterBottom
                        sx={{
                            textAlign: 'left',
                        }}
                    >
                        Carry your Funk
                    </Typography>

                    <Typography
                        component={'p'}
                        color='#1b4b66'
                        fontWeight={'500'}
                        gutterBottom
                        sx={{
                            fontSize: '28px',
                            textAlign: 'left',
                        }}
                    >
                        Trendy handbags collection for your party animal
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            margin: '20px 10px',
                            position: 'absolute',
                            left: '30px',
                            bottom: '5px',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            backgroundColor: '#1b4b66',
                            height: '44px',
                            width: '180px',
                            fontWeight: '500',
                            fontSize: '16px',
                            textTransform: 'none',
                        }}
                    >
                        <ArrowForwardIcon sx={{ marginRight: '8px' }} />
                        See more
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default HeroBanner;