import React from 'react';
import { Paper, Typography, Box, TextField, FormControl, FormLabel, Divider } from '@mui/material';

const AddressForm = () => (
  <Box sx={{ width: "708px", height: "500px", }}>
    <Typography fontSize="20px" fontWeight="600" gutterBottom>
      Add New Address
    </Typography>
    <Divider />
    <Box
      sx={{
        mt:"35px",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px", // Gap between fields
        width: "688px", 
        height: "292px",
      }}
    >
      {/* First Name */}
      <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
        <FormLabel sx={{ color: "#171520", fontSize: "16px", fontWeight: "500", mb:1}}>First Name</FormLabel>
        <TextField
          label="Enter First Name"
          variant="outlined"
          sx={{
            backgroundColor: "#F1F1F1", color: "#626262", fontSize: "16px", fontWeight: "500", borderRadius:"4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
          }} // Grey background
        />
      </FormControl>

      {/* Last Name */}
      <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
        <FormLabel sx={{ color: "#171520", fontSize: "16px", fontWeight: "500", mb:1 }}>Last Name</FormLabel>
        <TextField
          label="Enter Last Name"
          variant="outlined"
          sx={{ backgroundColor: "#F1F1F1", color: "#626262", fontSize: "16px", fontWeight: "500", borderRadius:"4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
           }}
        />
      </FormControl>

      {/* Mobile Number */}
      <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
        <FormLabel sx={{ color: "#171520", fontSize: "16px", fontWeight: "500", mb:1, mt:1.5 }}>Mobile Number</FormLabel>
        <TextField
          label="Enter Mobile Numder"
          variant="outlined"
          sx={{ backgroundColor: "#F1F1F1", color: "#626262", fontSize: "16px", fontWeight: "500", borderRadius:"4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
           }}
        />
      </FormControl>

      {/* Email */}
      <FormControl fullWidth sx={{ flex: "1 1 calc(50% - 8px)" }}>
        <FormLabel sx={{ color: "#171520", fontSize: "16px", fontWeight: "500", mb:1, mt:1.5 }}>Email</FormLabel>
        <TextField
          label="Enter Email"
          variant="outlined"
          sx={{ backgroundColor: "#F1F1F1", color: "#626262", fontSize: "16px", fontWeight: "500", borderRadius:"4px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
           }}
        />
      </FormControl>

      {/* Adress */}
      <FormControl fullWidth sx={{ flex: "1 1 100%", mb:5 }}>
        <FormLabel sx={{ color: "#171520", fontSize: "16px", fontWeight: "500", mb:1, mt:1.5 }}>Adress</FormLabel>
        <TextField
          label="Enter Aderss"
          variant="outlined"
          sx={{ backgroundColor: "#F1F1F1", color: "#626262", fontSize: "16px", fontWeight: "500", borderRadius:"4px", 
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
           }}
        />
      </FormControl>
    </Box>
    <Typography fontSize="20px" fontWeight="600" marginTop="70px">
      Select Payment Method
    </Typography>
    <Divider />
  </Box>
);

export default AddressForm;
