import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { BrandsSlider } from '../brandsslider/BrandsSlider';
import { useQuery } from '@tanstack/react-query';
export const ShopByBrands = () => {
    // const fetchBrands = () => {
    //     return fetch("https://cors-anywhere.herokuapp.com/https://backend-final-2-m4zr.onrender.com/api/brands").then((res) => res.json());
    // }

    const fetchBrands = async () => {
        const response = await fetch("/api/brands");
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    };

    // const { isLoading, data: brands, isError } = useQuery({
    //     queryKey: ['brands'],
    //     queryFn: fetchBrands, 
    // });
    const { isLoading, data: brands = [], isError } = useQuery({
        queryKey: ['brands'],
        queryFn: fetchBrands,
    });
    
    if (isLoading) {
        return (
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height:"200px",
                    }}
                >
                    <CircularProgress />
                </Box>
            </Container>
        );
    }

    if (isError) {
        return (
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "200px",
                        color: "red",
                    }}
                >
                    <Typography variant="h6">Failed to load brands. Please try again later.</Typography>
                </Box>
            </Container>
        );
    }
    
    

    return (
        <Container>
            <Box 
            sx={{
                marginTop: "50px",
                marginBottom: "50px",
            }}>
                <Typography variant='h2' sx={
                    {
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        color: "black"
                    }
                }>Shop By Brands</Typography>

                
           
                <BrandsSlider
                    slidesPerView={6}
                    spaceBetween={20}
                    array={brands}
               
                >
                    
                </BrandsSlider>
                </Box>


        </Container>
    )
}
