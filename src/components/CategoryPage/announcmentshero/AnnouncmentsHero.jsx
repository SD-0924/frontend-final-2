import { Box, Container, Typography } from "@mui/material"

export const AnnouncmentsHero = () => {
    return(
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
        
    </Container>
        
    )
}