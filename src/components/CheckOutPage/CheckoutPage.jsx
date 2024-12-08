import React from "react";
import { Container, Box, Button } from "@mui/material";
import CheckoutHeader from "./CheckoutHeader";
import AddressForm from "./AddressForm";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
    // return (
    //     <Container>
    //       <CheckoutHeader />
    //       <AddressForm />
    //       <OrderSummary />
    //     </Container>
    // );

    return (
        <Container>
            <CheckoutHeader />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mt: 4,
                }}
            >
                {/* Address Form Section */}
                <Box
                    sx={{
                        flex: 2,
                    }}
                >
                    <AddressForm />
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mb: 10, py: 1.5, backgroundColor:"#1b4b66", width:"700px" }}
                    >
                        Place Order
                    </Button>
                </Box>

                {/* Order Summary Section */}
                <Box
                    sx={{
                        flex: 1,
                        maxWidth: "400px",
                    }}
                >
                    <OrderSummary />
                </Box>
            </Box>
        </Container>
    );
};

export default CheckoutPage;
