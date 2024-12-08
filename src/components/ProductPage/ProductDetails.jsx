import { Box, Typography, Rating, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetails = ({ product }) => (
  <Box flex={1} width={{ xs: '100%', md: '645px' }} height="auto" p={{ xs: 2, md: 0 }}>
    <Typography fontWeight="600" fontSize={{ xs: '28px', md: '34px' }}>{product.brand_name}</Typography>
    <Typography color="#626262" fontWeight="600" fontSize={{ xs: '18px', md: '20px' }}>
      {product.name}
    </Typography>

    {/* Ratings */}
    <Box display="flex" alignItems="center" mt={2}>
      <Rating value={product.avarage_rating} readOnly />
      <Typography ml={2} color='#B6B6B6' fontSize="14px">
        ({product.number_of_ratings}) Ratings
      </Typography>
    </Box>

    {/* Price Section */}
    <Box display="flex" alignItems="center" mt={2}>
      <Typography fontWeight="700" fontSize={{ xs: '32px', md: '40px' }} color="black">
        ${product.price_after_discount}
      </Typography>
      {product.discount_percentage && (
        <>
          <del style={{ color: '#B6B6B6', marginLeft: '10px', fontSize: '24px' }}>
            ${product.price}
          </del>
          <span style={{ color: '#FF404B', marginLeft: '10px', fontSize: '18px' }}>
            {product.discount_percentage}% OFF
          </span>
        </>
      )}
    </Box>

    {/* Quantity Selector */}
    <Box display="flex" alignItems="center" mt={4}>
      <Typography mr={2} fontSize="18px">Quantity:</Typography>
      <Box display="flex" alignItems="center" border="1px solid #1B4B66" borderRadius="4px" width="100px">
        <IconButton size="small"><RemoveIcon /></IconButton>
        <Typography fontSize="14px">1</Typography>
        <IconButton size="small"><AddIcon /></IconButton>
      </Box>
    </Box>

    {/* Buttons */}
    <Box mt={5} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
      <Button
        variant="contained"
        sx={{ bgcolor: '#1B4B66', color: 'white', width: '100%' }}
        startIcon={<ShoppingBagIcon />}
      >
        Add to Bag
      </Button>
      <Button
        variant="outlined"
        sx={{ borderColor: '#1B4B66', color: '#1B4B66', width: '100%' }}
        startIcon={<FavoriteBorderIcon />}
      >
        Add to Wishlist
      </Button>
    </Box>
  </Box>
);

export default ProductDetails;
