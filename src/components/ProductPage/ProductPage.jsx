// import React, { useState, useEffect } from 'react';
// import { Container, Box, Tabs, Tab, Typography } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import ProductImageCarousel from './ProductImageCarousel';
// import ProductDetails from './ProductDetails';

// const ProductPage = () => {
//   const { id } = useParams(); 
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [tabValue, setTabValue] = useState(0);

//   // useEffect(() => {
//   //   fetch(https://backend-final-2-m4zr.onrender.com/api/product/${id})
//   //     .then((response) => {
//   //       if (!response.ok) throw new Error('Failed to fetch product');
//   //       return response.json();
//   //     })
//   //     .then((data) => {
//   //       setProduct(data);
//   //       setLoading(false);
//   //     })
//   //     .catch((error) => {
//   //       setError(error.message);
//   //       setLoading(false);
//   //     });
//   // }, [id]);
//   useEffect(() => {
//     fetch(/api/product/${id})
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setProduct(data); // Ensure this state updates properly
//         setLoading(false); // Set loading state to false
//       })
//       .catch(error => {
//         console.error('Fetch error:', error);
//         setError(true); // Add an error state and show an error message
//       });
//   }, [id]);


//   const handleChange = (event, newValue) => setTabValue(newValue);

//   if (loading) return <Typography>Loading...</Typography>;
//   if (error) return <Typography>Error: {error}</Typography>;

//   return (
//     <Container maxWidth={false} sx={{ width: '1300px', margin: '0 auto' }}>
//       <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1}>
//         <Box width={{ xs: '100%', md: '50%' }}>
//           <ProductImageCarousel images={product.product_image_url} />
//         </Box>
//         <ProductDetails product={product} />
//       </Box>


//       <Box mt={25}>
//         <Tabs value={tabValue} onChange={handleChange}>
//           <Tab label="Product Description" />
//           <Tab label="Related Products" />
//           <Tab label="Ratings and Reviews" />
//         </Tabs>

//         <Box mt={3} mb={10}>
//           {tabValue === 0 && (
//             <Typography variant="body1">{product.description}</Typography>
//           )}
//           {tabValue === 1 && <Typography>Related Products Content</Typography>}
//           {tabValue === 2 && <Typography>Ratings and Reviews Content</Typography>}
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ProductPage;



import React, { useState, useEffect } from 'react';
import { Container, Box, Tabs, Tab, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(true);
      });
  }, [id]);

  const handleChange = (event, newValue) => setTabValue(newValue);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Container maxWidth={false} sx={{ width: '1300px', margin: '0 auto' }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={1}>
        <Box width={{ xs: '100%', md: '50%' }}>
          <ProductImageCarousel images={product.product_image_url} />
        </Box>
        <ProductDetails product={product} />
      </Box>

      <Box
        mt={15}
        sx={{
          backgroundColor: '#F1F1F1',
          borderRadius: '12px',
          width: '1240px',  // Set the width
          height: '48px',   // Set the height
          display: 'flex',  // Ensure the Tabs stretch horizontally
          alignItems: 'center'  // Vertically center the Tabs
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }} // Hide default indicator
          sx={{ minHeight: '48px', height: '48px' }}  // Match the Tabs height to the container
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
                color: tabValue === index ? '#FFFFFF' : '#626262',  // White text when active
                margin: '4px',
                border: tabValue === index ? '2px solid #1B4B66' : 'none',
                transition: 'all 0.3s',
                minHeight: '40px',  // Ensure consistent height
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
        {tabValue === 1 && <Typography>Related Products Content</Typography>}
        {tabValue === 2 && <Typography>Ratings and Reviews Content</Typography>}
      </Box>

    </Container>
  );
};

export default ProductPage;