import React, { useState, useEffect } from 'react';
import { Container, Box, Tabs, Tab, Typography, CircularProgress, Rating, Link } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [reviewsError, setReviewsError] = useState(null);

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(true);
      });
  }, [id]);

  const fetchReviews = () => {
    setReviewsLoading(true);
    fetch(`/api/rating/productRating/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch ratings');
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setReviewsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
        setReviewsError(error.message);
        setReviewsLoading(false);
      });
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 2) fetchReviews(); // Fetch reviews when the Ratings and Reviews tab is clicked
  };

  if (loading) return <Typography><CircularProgress /></Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Container maxWidth={false} sx={{ width: '1300px', margin: '0 auto' }}>

      <Box sx={{ display: "flex", gap: "10px", textAlign: "center", alignItems: "center", flexWrap: "wrap", mb:"20px" }}>
        <Link href="/" underline="none" sx={{ color: "#1b4b66", fontSize: "1rem" }}>
          Home
        </Link>
        <Typography sx={{ color: "black", fontSize: "1rem" }}>{">"}</Typography>
        <Link href={`/product/${id}`} underline="none" sx={{ color: "#626262", fontSize: "1rem" }}>
          Product
        </Link>
      </Box>

      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1}>
        <Box width={{ xs: '100%', md: '50%' }}>
          <ProductImageCarousel images={product.product_image_url} />
        </Box>
        <ProductDetails />
      </Box>

      <Box
        mt={15}
        sx={{
          backgroundColor: '#F1F1F1',
          borderRadius: '12px',
          width: '1240px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{ minHeight: '48px', height: '48px' }}
        >
          {['Product Description', 'Related Products', 'Ratings and Reviews'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                textTransform: 'none',
                fontWeight: '600',
                padding: '12px 24px',
                borderRadius: tabValue === index ? '8px' : '0',
                backgroundColor: tabValue === index ? '#1B4B66' : 'transparent',
                color: tabValue === index ? '#FFFFFF' : '#626262',
                margin: '4px',
                border: tabValue === index ? '2px solid #1B4B66' : 'none',
                transition: 'all 0.3s',
                minHeight: '40px',
                height: '40px',
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Box p={3} mb={8} color="#626262">
        {tabValue === 0 && (
          <Typography variant="body1">{product.description}</Typography>
        )}
        {tabValue === 1 && <RelatedProducts />}
        {tabValue === 2 && (
          <Box>
            {reviewsLoading && <CircularProgress />}
            {reviewsError && <Typography>Error: {reviewsError}</Typography>}
            {!reviewsLoading && reviews.length === 0 && (
              <Typography>No ratings or reviews available for this product.</Typography>
            )}
            {!reviewsLoading &&
              reviews.map((review, index) => (
                <Box
                  key={index}
                  mb={2}
                  p={2}
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '8px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Rating value={review.rating} readOnly precision={0.1} />
                  <Typography variant="body2" mt={1}>
                    {review.review || 'No review provided.'}
                  </Typography>
                </Box>
              ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default ProductPage;
