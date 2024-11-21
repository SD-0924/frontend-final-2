import { Box, Container, Typography } from '@mui/material';
import { BrandsSlider } from '../brandsslider/BrandsSlider';
export const ShopByBrands = () => {
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
                    array={[
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                        { image: '/zaralogo.svg' },
                    ]}
                >
                </BrandsSlider>
                </Box>


        </Container>
    )
}
