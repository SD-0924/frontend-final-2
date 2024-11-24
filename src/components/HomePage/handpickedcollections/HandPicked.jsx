
import { Box, Container, Typography } from '@mui/material';
import { HandPickedSlider } from '../handpickedslider/HandPickedSlider';
export const HandPickedCollections = () => {
    return (

        <Box 
        sx={ 
            {
                bgcolor: "#1b4b66",
                width: "100%",
                paddingBottom: "0px"
            }
           
        }>

            <Container>
                <Box
                sx={{
                    color: "white",
                    paddingTop: "15px",

                }}>
                <Typography variant='h2' sx={
                    {
                        
                        fontSize: "1.8rem",
                        color: "white",
                    }
                }>Handpicked Collections</Typography>
                    <HandPickedSlider

                        array={[
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                            { image: '/images/perfume.jpg', title: 'Personal Care' },
                        ]}>

                    </HandPickedSlider>


                

                </Box>
            </Container>

        </Box>
    )
}