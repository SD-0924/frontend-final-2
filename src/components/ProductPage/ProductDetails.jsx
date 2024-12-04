// import React from 'react';
// import { Box, Typography, Rating, Button, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// const ProductDetails = ({ product }) => (
//     <Box flex={1} width="645px" height="526px">
//         <Typography fontWeight="600" fontSize="34px">{product.brand_name}</Typography>
//         <Typography color="#626262" fontWeight="600" fontSize="20px">
//             {product.name}
//         </Typography>

//         <Box display="flex" alignItems="center" mt={3}>
//             <Rating value={product.avarage_rating} readOnly />
//             <Typography variant="body2" ml={2} color='#B6B6B6' fontSize="16px">
//                 ({product.number_of_ratings}) Ratings
//             </Typography>
//         </Box>

//         <Box display="flex" alignItems="center" mt={3}>
//             <Typography fontWeight="700" fontSize="40px" color="black">
//                 ${product.price_after_discount}
//             </Typography>
//             {product.discount_percentage && (
//                 <>
//                     <del style={{ color: '#B6B6B6', marginLeft: '10px', fontWeight: '600', fontSize: '34px' }}>
//                         ${product.price}
//                     </del>
//                     <span style={{ color: '#FF404B', marginLeft: '10px', fontWeight: '600', fontSize: '20px' }}>
//                         {product.discount_percentage}% OFF
//                     </span>
//                 </>
//             )}
//         </Box>

//         <Box mt={3} style={{ width: '100%', borderBottom: '1px solid #B6B6B6' }} />

//         <Box display="flex" alignItems="center" mt={5}>
//             <Typography mr={2} color='#13101E' fontWeight="600" fontSize="20px">Quantity:</Typography>
//             <Box display="flex" alignItems="center" border="1px solid #1B4B66" borderRadius="4px" width="73px" height="30px">
//                 <IconButton size="small" style={{ color: "#171520" }}><RemoveIcon /></IconButton>
//                 <Typography fontSize="14px" fontWeight="400">1</Typography>
//                 <IconButton size="small" style={{ color: "#171520" }}><AddIcon /></IconButton>
//             </Box>
//         </Box>

//         <Box mt={8} display="flex" gap={2}>
//             <Button
//                 variant="contained"
//                 sx={{
//                     bgcolor: '#1B4B66',
//                     '&:hover': { bgcolor: '#1B4B66' },
//                     color: 'white',
//                     width: "328px",
//                 }}
//                 startIcon={<ShoppingBagIcon />}
//                 fullWidth
//             >
//                 Add to bag
//             </Button>
//             <Button
//                 variant="outlined"
//                 sx={{
//                     borderColor: '#1B4B66',
//                     color: '#1B4B66',
//                     '&:hover': { borderColor: '#1B4B66', color: '#1B4B66' },
//                     width: "240px",
//                 }}
//                 startIcon={<FavoriteBorderIcon />}
//                 fullWidth
//             >
//                 Add to Wishlist
//             </Button>
//         </Box>
//     </Box>
// );

// export default ProductDetails;


import React from 'react';
import { Box, Typography, Rating, Button, IconButton, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetails = ({ product }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Check for small screens

  return (
    <Box
      flex={1}
      width={isSmallScreen ? '90%' : '645px'}  // Adjust width for smaller screens
      height="auto"  // Allow height to adjust dynamically
      margin="0 auto"  // Center align on the screen
      p={isSmallScreen ? 2 : 4}  // Padding based on screen size
    >
      {/* Brand and product name */}
      <Typography fontWeight="600" fontSize={isSmallScreen ? '24px' : '34px'}>
        {product.brand_name}
      </Typography>
      <Typography color="#626262" fontWeight="600" fontSize={isSmallScreen ? '16px' : '20px'}>
        {product.name}
      </Typography>

      {/* Rating */}
      <Box display="flex" alignItems="center" mt={2}>
        <Rating value={product.avarage_rating} readOnly />
        <Typography
          variant="body2"
          ml={2}
          color="#B6B6B6"
          fontSize={isSmallScreen ? '14px' : '16px'}
        >
          ({product.number_of_ratings}) Ratings
        </Typography>
      </Box>

      {/* Price section */}
      <Box display="flex" alignItems="center" mt={3}>
        <Typography
          fontWeight="700"
          fontSize={isSmallScreen ? '30px' : '40px'}
          color="black"
        >
          ${product.price_after_discount}
        </Typography>
        {product.discount_percentage && (
          <>
            <del
              style={{
                color: '#B6B6B6',
                marginLeft: '10px',
                fontWeight: '600',
                fontSize: isSmallScreen ? '24px' : '34px',
              }}
            >
              ${product.price}
            </del>
            <span
              style={{
                color: '#FF404B',
                marginLeft: '10px',
                fontWeight: '600',
                fontSize: isSmallScreen ? '16px' : '20px',
              }}
            >
              {product.discount_percentage}% OFF
            </span>
          </>
        )}
      </Box>

      {/* Horizontal separator */}
      <Box
        mt={3}
        style={{ width: '100%', borderBottom: '1px solid #B6B6B6' }}
      />

      {/* Quantity selector */}
      <Box display="flex" alignItems="center" mt={4}>
        <Typography
          mr={2}
          color="#13101E"
          fontWeight="600"
          fontSize={isSmallScreen ? '16px' : '20px'}
        >
          Quantity:
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          border="1px solid #1B4B66"
          borderRadius="4px"
          width="80px"
          height="36px"
        >
          <IconButton size="small" style={{ color: "#171520" }}>
            <RemoveIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
          </IconButton>
          <Typography fontSize="14px" fontWeight="400">1</Typography>
          <IconButton size="small" style={{ color: "#171520" }}>
            <AddIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
          </IconButton>
        </Box>
      </Box>

      {/* Action buttons */}
      <Box mt={6} display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={2}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#1B4B66',
            '&:hover': { bgcolor: '#1B4B66' },
            color: 'white',
            width: isSmallScreen ? '100%' : '328px',
            height: '48px',
          }}
          startIcon={<ShoppingBagIcon />}
        >
          Add to bag
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#1B4B66',
            color: '#1B4B66',
            '&:hover': { borderColor: '#1B4B66', color: '#1B4B66' },
            width: isSmallScreen ? '100%' : '240px',
            height: '48px',
          }}
          startIcon={<FavoriteBorderIcon />}
        >
          Add to Wishlist
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
