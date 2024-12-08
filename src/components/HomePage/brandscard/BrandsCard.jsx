import React from 'react';
import { Box, Link } from '@mui/material';

export const BrandsCard = (props) => {
  return (
    <Box
    component={Link}
    href={`/brands/${props.props.brand_name}`}
      sx={{
        display: 'flex',
        backgroundColor: '#f4f4f4',
        borderRadius: '20px',
        mt: 2,
        overflow: 'hidden',
        height: '168px',
        width: '168px',
        justifyContent: 'center',
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
          src={props.props.brand_image_url}
          alt={props.props.brand_name}
          sx={{
            overflow: 'hidden',
            objectFit: 'contain',
            alignSelf: 'center',
            justifySelf: 'center',
          }}
        />

    </Box>

  );
};


