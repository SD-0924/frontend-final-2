// // OrderSummary.jsx
// import React from 'react';
// import { Paper, Typography, Box, Grid, Divider } from '@mui/material';

// const OrderSummary = () => (
//   <Paper elevation={3} sx={{ p: 4 }}>
//     <Typography variant="h6" gutterBottom>
//       Order Summary
//     </Typography>
//     <Box sx={{ mb: 2 }}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={3}>
//           <img src="https://via.placeholder.com/70" alt="Product" />
//         </Grid>
//         <Grid item xs={9}>
//           <Typography variant="body1">Coach</Typography>
//           <Typography variant="body2" color="text.secondary">Leather Coach Bag</Typography>
//           <Typography variant="body2" color="text.secondary">Qty - 1</Typography>
//         </Grid>
//       </Grid>
//       <Divider sx={{ my: 2 }} />
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={3}>
//           <img src="https://via.placeholder.com/70" alt="Product" />
//         </Grid>
//         <Grid item xs={9}>
//           <Typography variant="body1">Coach</Typography>
//           <Typography variant="body2" color="text.secondary">Leather Coach Bag</Typography>
//           <Typography variant="body2" color="text.secondary">Qty - 1</Typography>
//         </Grid>
//       </Grid>
//     </Box>
//     <Divider sx={{ my: 2 }} />
//     <Typography variant="body2">Sub Total: <strong>$119.69</strong></Typography>
//     <Typography variant="body2">Discount: <strong>-$13.40</strong></Typography>
//     <Typography variant="body2">Delivery Fee: <strong>$0.00</strong></Typography>
//     <Typography variant="h6" sx={{ mt: 2 }}>Grand Total: <strong>$106.29</strong></Typography>
//   </Paper>
// );

// export default OrderSummary;

import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';

const OrderSummary = () => (
  <Box sx={{ width: "412px", height: "545px", p: "5px" }}>
    <Typography fontSize="20px" fontWeight="600" gutterBottom>
      Order Summary
    </Typography>
    <Divider sx={{ mb: 7 }} />
    <Box sx={{ mb: 2 }}>
      {/* First Item */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4.5,
        }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/70"
          alt="Product"
          sx={{ width: 75, height: 80, mr: 2, borderRadius: "8px" }}
        />
        <Box>
          <Typography variant="body1">Coach</Typography>
          <Typography variant="body2" color="text.secondary">
            Leather Coach Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty - 1
          </Typography>
        </Box>
      </Box>


      {/* Second Item */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 8,
        }}
      >
        <Box
          component="img"
          src="https://via.placeholder.com/70"
          alt="Product"
          sx={{ width: 75, height: 80, mr: 2, borderRadius: "8px" }}
        />
        <Box>
          <Typography variant="body1">Coach</Typography>
          <Typography variant="body2" color="text.secondary">
            Leather Coach Bag
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty - 1
          </Typography>
        </Box>
      </Box>
    </Box>

    <Typography fontSize="20px" fontWeight="600" gutterBottom>
      Order Details
    </Typography>
    <Divider sx={{ mb: 3 }} />

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5
      }}
    >
      <Typography>Sub Total:</Typography>
      <Typography sx={{ color: '#171520' }}>$119.69</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5
      }}
    >
      <Typography>Discount:</Typography>
      <Typography sx={{ color: '#171520' }}>-$13.40</Typography>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#626262',
        my: 0.5
      }}
    >
      <Typography>Delivery Fee:</Typography>
      <Typography sx={{ color: '#171520' }}>$0.00</Typography>
    </Box>


    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
        color: '#171520',
        my: 0.5
      }}
    >
      <Typography>Grand Total:</Typography>
      <Typography sx={{ color: '#171520' }}>$106.29</Typography>
    </Box>

  </Box>
);

export default OrderSummary;
