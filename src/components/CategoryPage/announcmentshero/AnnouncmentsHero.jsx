import { Box, Container, Grid2, Link, Pagination, Typography, useMediaQuery } from "@mui/material";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { CardComponent } from "../cardcomponent/CardComponent";

export const AnnouncmentsHero = () => {
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const pageNumber = parseInt(queryParams.get("page")) || 1;
    const products = useLoaderData();
    // Handle pagination
    const handlePageChange = (event, newPage) => {
        navigate(`?page=${newPage}`);
    };

    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Container>
            {/* Hero Section */}
            <Box sx={{ position: "relative" }}>
                <Box
                    component={"img"}
                    src="/images/blackfridayedited.png"
                    sx={{
                        width: "100%",
                        height: { xs: "250px", sm: "300px", md: "400px" },
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "25px",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: { xs: "30px", sm: "80px", md: "130px" },
                        right: { xs: "10px", sm: "50px", md: "80px" },
                        color: "white",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
                            fontWeight: "700",
                        }}
                    >
                        UPTO 70% OFF
                    </Typography>
                    <Typography
                        component={"p"}
                        sx={{
                            fontSize: { xs: "1.2rem", sm: "3rem", md: "5rem" },
                            fontWeight: "400",
                            color: "black",
                        }}
                    >
                        BLACK FRIDAY
                    </Typography>
                </Box>
            </Box>

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
                        {name}
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
                    {name + "s"}
                </Typography>

                {/* Product Cards */}
                <Grid2
                    container
                    spacing={5}
                    sx={{
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                >
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Grid2>

                {/* Pagination */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px",
                    }}
                >
                    <Pagination
                        count={5}
                        page={pageNumber}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        siblingCount={1}
                        color="primary"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export const productsLoader = async ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page") || 1;
    const response = await fetch(`https://api.example.com/handbag?page=${page}`);
    if (!response.ok) {
        throw new Error("Failed to load products.");
    }
    return response.json();
};
