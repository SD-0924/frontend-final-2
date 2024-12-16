// import { Box, Grid, Typography, Pagination, Link, Container } from "@mui/material";
// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { NewArrivalCard } from "./NewArrivalCard";

// export const ViewAllNewArrivals = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const queryParams = new URLSearchParams(location.search);
//     const pageNumber = parseInt(queryParams.get("page")) || 1;

//     // State for products, loading, and error
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetching the products from the API
//     useEffect(() => {
//         const fetchProducts = async () => {
//             setIsLoading(true); // Start loading
//             setError(null); // Reset error state
//             try {
//                 const response = await fetch(`/api/newArrivals/all?page=${pageNumber}`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch products.");
//                 }
//                 const data = await response.json();
//                 setProducts(data); // Set products state
//             } catch (err) {
//                 setError(err.message); // Set error message
//             } finally {
//                 setIsLoading(false); // End loading
//             }
//         };

//         fetchProducts();
//     }, [pageNumber]); // Trigger when pageNumber changes

//     // Pagination handler
//     const handlePageChange = (event, newPage) => {
//         navigate(`?page=${newPage}`);
//     };

//     return (
//         <Box>
//             <Container>
//             <Box sx={{ display: "flex", gap: "10px", textAlign: "center", alignItems: "center", flexWrap: "wrap" }}>
//                 <Link href="/" underline="none" sx={{ color: "#1b4b66", fontSize: "1rem" }}>
//                     Home
//                 </Link>
//                 <Typography sx={{ color: "black", fontSize: "1rem" }}>{">"}</Typography>
//                 <Link href="/ViewAll" underline="none" sx={{ color: "#626262", fontSize: "1rem" }}>
//                     View All New Arrivals
//                 </Link>
//             </Box>
//             </Container>

//             <Box sx={{ width: { xs: "100%", sm: "90%", md: "940px" }, margin: "auto", marginTop: "20px" }}>

//                 {/* <Box sx={{ display: "flex", gap: "10px", textAlign: "center", alignItems: "center", flexWrap: "wrap" }}>
//                     <Link href="/" underline="none" sx={{ color: "#1b4b66", fontSize: "1rem" }}>
//                         Home
//                     </Link>
//                     <Typography sx={{ color: "black", fontSize: "1rem" }}>{">"}</Typography>
//                     <Link href="/ViewAll" underline="none" sx={{ color: "#626262", fontSize: "1rem" }}>
//                         View All New Arrivals
//                     </Link>
//                 </Box> */}

//                 <Typography
//                     variant="h1"
//                     sx={{
//                         color: "#1b4b66",
//                         marginTop: "20px",
//                         marginBottom: "30px",
//                         fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
//                         textAlign: { xs: "center", sm: "left" },
//                     }}
//                 >
//                     New Arrivals
//                 </Typography>

//                 {/* Loading or Error Handling */}
//                 {isLoading ? (
//                     <Typography variant="h6">Loading...</Typography>
//                 ) : error ? (
//                     <Typography variant="h6" color="error">{error}</Typography>
//                 ) : (
//                     <>
//                         {/* Product Cards */}
//                         <Grid container spacing={5} sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}>
//                             {products.length > 0 ? (
//                                 products.map((product) => (
//                                     <Grid item xs={12} sm={6} md={4} key={product.product_id}>
//                                         <NewArrivalCard product={product} />
//                                     </Grid>
//                                 ))
//                             ) : (
//                                 <Typography>No products available</Typography>
//                             )}
//                         </Grid>

//                         {/* Pagination */}
//                         {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
//               <Pagination
//                 count={2}
//                 page={pageNumber}
//                 onChange={handlePageChange}
//                 variant="outlined"
//                 shape="rounded"
//                 siblingCount={1}
//                 color="primary"
//               />
//             </Box> */}
//                     </>
//                 )}
//             </Box>
//         </Box>
//     );
// };


import { Box, Grid, Typography, Link, Container, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NewArrivalCard } from "./NewArrivalCard";

export const ViewAllNewArrivals = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(queryParams.get("page")) || 1;

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/newArrivals/all?page=${pageNumber}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products.");
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [pageNumber]);

    // Pagination handler
    const handlePageChange = (event, newPage) => {
        navigate(`?page=${newPage}`);
    };

    return (
        <Box>
            <Container> 
                <Box sx={{ display: "flex", gap: "10px", textAlign: "center", alignItems: "center", flexWrap: "wrap" }}>
                    <Link href="/" underline="none" sx={{ color: "#1b4b66", fontSize: "1rem" }}>
                        Home
                    </Link>
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>{">"}</Typography>
                    <Link href="/ViewAll" underline="none" sx={{ color: "#626262", fontSize: "1rem" }}>
                        View All New Arrivals
                    </Link>
                </Box>
            {/* </Container> */}

            {/* <Box sx={{ width: { xs: "100%", sm: "90%", md: "940px" }, margin: "auto", marginTop: "20px" }}> */}
            <Box sx={{ width: { xs: "100%", sm: "90%", md: "940px" }, margin: "auto", marginTop: "20px"}}>
                <Typography
                    variant="h1"
                    sx={{
                        color: "#1b4b66",
                        marginTop: "20px",
                        marginBottom: "30px",
                        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    New Arrivals
                </Typography>
                
                {/* Loading or Error Handling */}
                {isLoading ? (
                    <Typography variant="h6"><CircularProgress /></Typography>
                ) : error ? (
                    <Typography variant="h6" color="error">{error}</Typography>
                ) : (
                    <>
                        {/* Product Cards */}
                        <Grid container spacing={5} sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}>
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <Grid item xs={12} sm={6} md={4} key={product.product_id}>
                                        {/* Linking each product card to the ProductPage */}
                                        <Link href={`/product/${product.product_id}`} underline="none">
                                            <NewArrivalCard product={product} />
                                        </Link>
                                    </Grid>
                                ))
                            ) : (
                                <Typography>No products available</Typography>
                            )}
                        </Grid>
                    </>
                )}
            </Box>
            </Container>
        </Box>
    );
};
