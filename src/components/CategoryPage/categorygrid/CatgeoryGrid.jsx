import { Box, CircularProgress, Container, Grid2, Link, Pagination, Typography, useMediaQuery } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CardComponent } from "../cardcomponent/CardComponent";


export const CategoryGrid = () => {
    const { name } = useParams();
    const { type } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(queryParams.get("page")) || 1;
    // Handle pagination
    const handlePageChange = (event, newPage) => {
        navigate(`?page=${newPage}`);
    };
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const fetchProducts = (page = 0) => {
        if (type == "category") {
            return fetch(
                `/api/products/${name}?page=${page}`
            ).then((res) => res.json());
        }
        else if (type == "brands") {
            console.log(name);
            return fetch(
                `/api/product/brand/${name}`
            ).then((res) => res.json());
        } else if (type == "search") {
            return fetch(
                `/api/search/${name}`
            ).then((res) => res.json());
        }

    }

    const { isLoading, data: products, isError } = useQuery({
        queryKey: ['products', pageNumber, name],
        queryFn: () => fetchProducts(pageNumber),
    });
    console.log(products);
    return (

        <Container sx={{
            marginBottom: "20px",
        }}>

            {/* Breadcrumb Section */}
            <Box
                sx={{
                    width: { xs: "100%", sm: "90%", md: "940px" },
                    margin: "auto",
                    marginTop: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        textAlign: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <Link
                        href="/"
                        underline="none"
                        sx={{
                            color: "#1b4b66",
                            fontSize: "1rem",
                        }}
                    >
                        Home
                    </Link>
                    <Typography
                        sx={{
                            color: "black",
                            fontSize: "1rem",
                        }}
                    >
                        {'>'}
                    </Typography>
                    <Link
                        href="#"
                        underline="none"
                        sx={{
                            color: "#626262",
                            fontSize: "1rem",
                        }}
                    >
                        {type == "search" ? "Search" : name}
                    </Link>
                </Box>

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
                    {name}
                </Typography>

                {/* Product Cards */}
                <Grid2
                    container
                    spacing={5}
                    sx={{
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                >
                    {isLoading && <CircularProgress></CircularProgress>
                    }
                    {isError && <Typography>Error fetching data</Typography>}
                    {!isLoading && !isError && (products?.length === 0 || products?.products?.length === 0) && (
                        <Typography variant="h6" color="textSecondary" textAlign="center">
                            No products found for your search.
                        </Typography>
                    )}
                    {type == "category" ? products?.products.map(
                        (product, index) => (
                            <CardComponent key={index} product={product} />
                        )
                    ) : products?.map(
                        (product, index) => (
                            <CardComponent key={index} product={product} />
                        )
                    )}
                </Grid2>


                {/* Pagination */}
                {type == "category" ? <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                    }}
                >

                    <Pagination
                        count={products?.number_of_pages}
                        page={pageNumber}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        siblingCount={1}
                        color="primary"
                    />


                </Box> : null}
            </Box>
        </Container>
    );
};










