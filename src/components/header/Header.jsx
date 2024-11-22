import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, InputBase, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  width: '350px',
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  [theme.breakpoints.down('md')]: {
    width: '250px',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: '#1b4b66',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(0),
  flex: 1,
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  color: '#1b4b66',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none', 
  },
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  color: '#1b4b66',
}));

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: 'none',
        marginBottom: 3,
        marginTop: 2,
      }}
      elevation={1}
    >
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            fontSize: isSmallScreen ? 24 : 35,
            color: '#0e5357',
          }}
        >
          CORA'L
        </Typography>

        <NavLinks>
          {['Handbags', 'Watches', 'Skincare', 'Jewellery', 'Apparels'].map((item) => (
            <Typography
              key={item}
              variant="body1"
              component="a"
              href="#"
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              {item}
            </Typography>
          ))}
        </NavLinks>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: isSmallScreen ? 1 : 0,
            justifyContent: isSmallScreen ? 'space-between' : 'flex-end',
            width: isSmallScreen ? '100%' : 'auto',
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search for products or brands..." />
          </Search>

          <CustomIconButton>
            <FavoriteBorderIcon />
          </CustomIconButton>
          <CustomIconButton>
            <PersonOutlineIcon />
          </CustomIconButton>
          <CustomIconButton>
            <ShoppingBagOutlinedIcon />
          </CustomIconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
