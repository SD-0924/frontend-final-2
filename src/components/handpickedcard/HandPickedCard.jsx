import React from 'react';
import { Box, Typography } from '@mui/material';

const HandPickedCard = (props) => {
    return (
        <Box
            sx={{
                position: 'relative',
                maxWidth: "280px",
                minHeight: '280px',
                borderRadius: '20px',
                mt: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
                },
                '&:active': {
                    transform: 'scale(0.98)',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                },
            }}
        >
            <Box
                component="img"
                src={props.image}
                alt={props.title}
                sx={{
                    maxWidth: "280px",
                    objectFit: 'cover',
                    borderRadius: '20px',
                    minHeight: '280px',

                }}
            />
            <Typography
                variant="h5"
                sx={{
                    fontSize: '1.3rem',
                    position: 'absolute',
                    zIndex: 1,
                    color: 'black',
                    bottom: '15px',
                    left: '20px',
                    '@media (max-width: 600px)': {
                        fontSize: '0.85rem',
                        bottom: '10px',
                        left: '10px',
                    },
                    '@media (max-width: 1024px)': {
                        fontSize: '0.9rem',
                        bottom: '12px',
                        left: '15px',
                    },
                }}
            >
                {props.title}
            </Typography>
        </Box>
    );
};

export default HandPickedCard;
