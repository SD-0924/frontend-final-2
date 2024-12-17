// import React, { useState, useEffect } from 'react';
// import { Box, CircularProgress, Typography } from '@mui/material';
// import { CardComponent } from '../CategoryPage/cardcomponent/CardComponent'; // Import CardComponent

// const RelatedProducts = ({ productId, category }) => {
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!category || !productId) return; // Ensure category and productId are valid

//     // Fetch related products using the correct category and productId
//     const fetchRelatedProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`/api/products/${category}/${productId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch related products');
//         }
//         const data = await response.json();
//         setRelatedProducts(data); // Set related products data
//       } catch (error) {
//         console.error('Error fetching related products:', error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRelatedProducts();
//   }, [productId, category]); // Refetch when productId or category changes

//   if (loading) return <CircularProgress />;
//   if (error) return <Typography>Error fetching related products: {error}</Typography>;

//   return (
//     <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
//       {relatedProducts.length === 0 ? (
//         <Typography>No related products found.</Typography>
//       ) : (
//         relatedProducts.map((product) => (
//           <CardComponent key={product.product_id} product={product} />
//         ))
//       )}
//     </Box>
//   );
// };

// export default RelatedProducts;


import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, IconButton, Link } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// Helper function for rendering star ratings
function getStars(rating) {
    let starElements = [];
    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            starElements.push(<i key={i} className="fa-solid fa-star" style={{ color: "#FF8C4B" }}></i>);
        } else {
            starElements.push(<i key={i} className="fa-regular fa-star" style={{ color: "#FF8C4B" }}></i>);
        }
    }
    return starElements;
}

// CardComponent
const CardComponent = ({ product }) => {
    return (
        <Box sx={{ height: "422px", width: "200px" }}>
            <Link href={`/product/${product.product_id}`}>
                <Box
                    component={"img"}
                    src={product.product_image_url}
                    sx={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "10px",
                    }}
                />
            </Link>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography fontSize="20px">{product.brand_name}</Typography>
                <IconButton>
                    <FavoriteBorderIcon sx={{ color: "black" }} />
                </IconButton>
            </Box>

            <Typography component={"p"} sx={{ color: "#626262" }}>
                {product.name}
            </Typography>

            <Box sx={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                <Box sx={{ fontSize: "1rem", color: "#FF8C4B" }}>
                    {getStars(product.averageRating)}
                </Box>
                <Typography component={"p"} sx={{ color: "#1B4B66", fontWeight: "500" }}>
                    {product.NumberOfRatings} Ratings
                </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography component={"p"} sx={{ fontWeight: "500" }}>
                    ${product.price_after_discount}
                </Typography>
                <Typography
                    component={"p"}
                    sx={{
                        color: "#626262",
                        textDecoration: "line-through",
                        fontSize: "14px",
                    }}
                >
                    ${product.price}
                </Typography>
                <Typography component={"p"} sx={{ color: "#E21D1D" }}>
                    {product.discount_percentage}% OFF
                </Typography>
            </Box>
        </Box>
    );
};

// RelatedProducts Component
const RelatedProducts = () => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Static related products data
        const staticData = [
            {
                product_id: 1,
                name: 'Face Cream',
                brand_name: 'Cetaphil',
                product_image_url: 'https://i.ibb.co/bvXG5g9/skincare3.webp',
                averageRating: 4.5,
                NumberOfRatings: 120,
                price: 100,
                price_after_discount: 80,
                discount_percentage: 20,
            },
            {
                product_id: 2,
                name: 'Cleanser',
                brand_name: 'Cetaphil',
                product_image_url: 'https://i.ibb.co/W3BGnyZ/skincare1.jpg',
                averageRating: 4.8,
                NumberOfRatings: 200,
                price: 200,
                price_after_discount: 150,
                discount_percentage: 25,
            },
            {
                product_id: 3,
                name: 'Hair Brush',
                brand_name: 'Omega',
                product_image_url: 'https://i.ibb.co/FwsY3BB/personalcare3.webp',
                averageRating: 4.2,
                NumberOfRatings: 85,
                price: 120,
                price_after_discount: 100,
                discount_percentage: 16.7,
            },
            {
                product_id: 4,
                name: 'Hand Cream',
                brand_name: 'Cetaphil',
                product_image_url: 'https://i.ibb.co/sjXXCxd/skincare2.jpg',
                averageRating: 4.6,
                NumberOfRatings: 150,
                price: 50,
                price_after_discount: 40,
                discount_percentage: 20,
            },
        ];

        // Set static data and stop loading
        setRelatedProducts(staticData);
        setLoading(false);
    }, []);

    if (loading) return <CircularProgress />;

    return (
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            {relatedProducts.length === 0 ? (
                <Typography>No related products found.</Typography>
            ) : (
                relatedProducts.map((product) => <CardComponent key={product.product_id} product={product} />)
            )}
        </Box>
    );
};

export default RelatedProducts;
