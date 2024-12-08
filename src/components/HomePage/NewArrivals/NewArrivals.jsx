// import React from 'react';
// import { Box, Typography, Card, CardContent, CardMedia, Grid, IconButton, Container } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const products = [
//     { name: 'Grande', description: 'Blossom Pouch', price: '$39.49', image: 'https://s3-alpha-sig.figma.com/img/ea12/c575/029ef5971eaa1f9cc5c527e9d758efcb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLRrgFXKBBUAUzrWHtsxOz2o4XSMVShaxxOgYg6uQCz2F3truduYlvS0ZPQejgf7EKDNVkFqj4Ht~d2zJ42ZDV3elL2xNvHUEFjeX6JHojUH0k2YVOJN0AnbyMjV5VD7IxcDmEJ38jBsKeUP0tfAxzxmlUL2DhE1kcwOD0JzxY5yrge~ir6iN3PDK4s5bE0xVL4YnDhRa1kn-sc8ScZ7gl97Bc4r-ywXbIJXN3AvIy9L5B53WjNhPZRLBSU9m844nd2K55QPPmn~RJyPb2n-5Stx2YenAaXQnaPz4f03H~Sv6~FiQRH-vocvLDA6Ydk0v6Z8DNRZX71x1M32zmidkA__' },
//     { name: 'Coach', description: 'Leather Coach Bag', price: '$54.69', image: 'https://s3-alpha-sig.figma.com/img/d1cb/e068/ccf5f4b0e5aff23d7ed9bba11612eb37?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YTk34mZ5Dhq8b7dl~aAZYZXKlVv~V2ndPGkE5PTirdBc7JDP9GfitAwaytMeOb48qgx63j9P4lXkhdxZq7wmOa4qoP9BKjvhU9lbXsM8Vbnr~3bbDwMJ-x6POAMFxvPMTFoxhW~T37YyBT1GWaefiEBdB5V3O~pxhcofPctPSoSQLHXZylYmXv6ro3kiPOHkSvYoLyOUXE3iRvJcTku6HrCL4HZc2puV03EZE98l-EXyVa7aW9Kf3eCt3bHIjCdOXH5NzHVhsMnb4FVQ7JoL-kZo9MsX0pRbVIhhI2PgeSYWd4ybtzKtdC7INtKbsaaKyg5NSjENZyBrtnzjZvH71Q__' },
//     { name: 'Remus', description: 'Brown Strap Bag', price: '$57.00', image: 'https://s3-alpha-sig.figma.com/img/d471/006c/87cf11e911a7e3ccffe2393c0d87ed97?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W7HLrs1aHlwkGd-tqaJlpFeRA6or2ZarQpvtH~i~BKO4P~KUH15BCPyvvC7SPa8s40nMlBU3mlP~J1nnqmjENBfPsTgIrDMzsB8nZ6hF6LF-Ao7aTNxjMqlPY8Bse31mnRVXRRSS8rjs7WZoRcf44LHTjFd8XrNgMOMxqb7Bb4j9Bq~iyHJx36WVhL0tK9z0IyBait9xcPld7XmmXpQa-PzyZ~eNI8bXdM2jDBvEOQnUJ6njSqnU8DHKq7p-YPqLC62go4pWakZVabm2nPj-nWI7KBAX3ugkNMcld1SUydY3hKmvr-S1Bvv133IRG1HMu~QkhqaR-e8BUY53iOHL7g__' },
//     { name: 'Boujee', description: 'Black Bag', price: '$56.49', image: 'https://s3-alpha-sig.figma.com/img/54b0/1e4b/3fefa2b9494e8fab4f251171fa151af2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Keeo~LHJCjPuYtBD2i6SnlpdYOCaxf~xpVMLaTludV4CzkFkOBAgfr0VcQiJZblhFVhimRIg4MjWMbT4TER5VC0kYLkVt1y6ngJ0fFyFyFLEjQPNI7G3LP8qpqyGN4aH9nKkj2PFMtwFmvyhvJT3GFrzYkNX8AOP4KunLp1ybt9FNBOc9eHOK~bGwOH~lRe9Gl46vdV9P1v2T6RpAIzB5sEKfwPJgfy-FlDKPZ2RxLaMMDPWgVlVQbSHjGSBt2O-JPi6cQwguKqlbLzc1U3t82c9vxd2TKbRCAxSrme7j8AmRTwCD8ApHC7a8JVSXDESjoJM-zud4CL5YJhbXBg5AQ__' }
// ];

// const NewArrivals = () => {
//     return (
//         <Container>
//             <Box>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         marginBottom: '20px'
//                     }}
//                 >
//                     <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '34px', color: '#13101E' }}>
//                         New Arrivals
//                     </Typography>
//                     <Typography
//                         component="a"
//                         href="#"
//                         sx={{ color: '#1B4B66', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}
//                     >
//                         View All
//                         <ArrowForwardIosIcon sx={{ fontSize: '15px', marginLeft: '9px' }} />
//                     </Typography>
//                 </Box>
//                 <Grid container spacing={3}>
//                     {products.map((product, index) => (
//                         <Grid item xs={12} sm={6} md={3} key={index}>
//                             <Card
//                                 sx={{
//                                     maxWidth: 284,
//                                     height: 412,
//                                     boxShadow: 'none',
//                                     borderRadius: '10px',
//                                     margin: 'auto'
//                                 }}
//                             >
//                                 <CardMedia
//                                     component="img"
//                                     image={product.image}
//                                     alt={product.name}
//                                     sx={{ height: 250, borderRadius: '10px' }}
//                                 />
//                                 <CardContent sx={{ textAlign: 'left', padding: '0', marginTop: '20px' }}>
//                                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                         <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '16px' }}>
//                                             {product.name}
//                                         </Typography>
//                                         <IconButton sx={{ color: '#13101E', padding: 0 }}>
//                                             <FavoriteBorderIcon />
//                                         </IconButton>
//                                     </Box>
//                                     <Typography variant="body2" color="textSecondary" sx={{ margin: '5px 0', fontWeight: '400', fontSize: '14px', color: '#626262' }}>
//                                         {product.description}
//                                     </Typography>
//                                     <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '16px', color: '#171520' }}>
//                                         {product.price}
//                                     </Typography>
//                                 </CardContent>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Container>
//     );
// };

// export default NewArrivals;

import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Grid, IconButton, Container } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NewArrivals = () => {
    const [products, setProducts] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        fetch('/api/newArrivals')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data); // Set the fetched data to the state
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <Container>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px'
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '34px', color: '#13101E' }}>
                        New Arrivals
                    </Typography>
                    <Typography
                        component="a"
                        href="#"
                        sx={{ color: '#1B4B66', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}
                    >
                        View All
                        <ArrowForwardIosIcon sx={{ fontSize: '15px', marginLeft: '9px' }} />
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.product_id}>
                            <Card
                                sx={{
                                    maxWidth: 284,
                                    height: 412,
                                    boxShadow: 'none',
                                    borderRadius: '10px',
                                    margin: 'auto'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={product.product_image_url}
                                    alt={product.name}
                                    sx={{ height: 250, borderRadius: '10px' }}
                                />
                                <CardContent sx={{ textAlign: 'left', padding: '0', marginTop: '20px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '16px' }}>
                                            {product.brand_name}
                                        </Typography>
                                        <IconButton sx={{ color: '#13101E', padding: 0 }}>
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                    </Box>
                                    <Typography variant="body2" color="textSecondary" sx={{ margin: '5px 0', fontWeight: '400', fontSize: '14px', color: '#626262' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '16px', color: '#171520' }}>
                                        ${product.price_after_discount.toFixed(2)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default NewArrivals;
