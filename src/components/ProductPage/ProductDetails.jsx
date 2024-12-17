import { Box, Typography, Rating, Button, IconButton, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State for product details
  const [quantity, setQuantity] = useState(1);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  // Handle quantity changes
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // Fetch product details and ratings
  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined.");
      return;
    }

    // Fetch product details (replace with your API endpoint)
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`); // Replace with your product API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch product details: ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    // Fetch ratings for the product
    const fetchRatings = async () => {
      try {
        const response = await fetch(`/api/rating/productRating/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ratings: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
          const count = data.length;
          setAverageRating(totalRating / count);
          setRatingCount(count);
        } else {
          console.error("Unexpected API response format:", data);
        }
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };

    fetchProduct();
    fetchRatings();
  }, [id]);

  // Render loading state if product details are not available yet
  if (!product) {
    return <Typography><CircularProgress /></Typography>;
  }

  return (
    <Box flex={1} width={{ xs: '100%', md: '645px' }} height="auto" p={{ xs: 2, md: 0 }}>
      <Typography fontWeight="600" fontSize={{ xs: '28px', md: '34px' }}>
        {product.brand_name}
      </Typography>
      <Typography color="#626262" fontWeight="600" fontSize={{ xs: '18px', md: '20px' }}>
        {product.name}
      </Typography>

      {/* Ratings */}
      <Box display="flex" alignItems="center" mt={2}>
        <Rating value={averageRating} readOnly precision={0.1} />
        <Typography ml={2} color="#B6B6B6" fontSize="14px">
          ({ratingCount}) Ratings
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          border="1px solid #1B4B66"
          borderRadius="4px"
          width="100px"
          height="40px"
        >
          <IconButton size="small" onClick={decreaseQuantity}>
            <RemoveIcon />
          </IconButton>
          <Typography fontSize="14px">{quantity}</Typography>
          <IconButton size="small" onClick={increaseQuantity}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Buttons */}
      <Box mt={5} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
        {/* <Button
          variant="contained"
          sx={{ bgcolor: '#1B4B66', color: 'white', width: '100%' }}
          startIcon={<ShoppingBagIcon />}
        >
          Add to Bag
        </Button> */}
        <Button
          variant="contained"
          sx={{ bgcolor: '#1B4B66', color: 'white', width: '100%' }}
          startIcon={<ShoppingBagIcon />}
          onClick={async () => {
            try {
              const token = localStorage.getItem("token"); // Assume token is stored in localStorage
              if (!token) {
                alert("Please log in to add items to your bag.");
                return;
              }

              const response = await fetch(`/api/cart/add`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`, // Include token in the request
                },
                body: JSON.stringify({
                  productId: product.id, // Product ID
                  quantity, // Selected quantity
                }),
              });

              if (!response.ok) {
                throw new Error(`Failed to add product to cart: ${response.statusText}`);
              }

              const result = await response.json();
              alert("Product added to bag successfully!");
              console.log(result); // Log the response for debugging
            } catch (error) {
              console.error("Error adding product to bag:", error);
              alert("Failed to add product to bag.");
            }
          }}
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
};

export default ProductDetails;
