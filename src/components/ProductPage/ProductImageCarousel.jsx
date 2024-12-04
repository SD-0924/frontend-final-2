// import { Box, IconButton } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const ProductImageCarousel = ({ images }) => {
//   const defaultImageUrl = 'https://s3-alpha-sig.figma.com/img/dda1/f126/e21479d8602051b0469c5c40d6e2db6e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTrjqZnmX1VvrhWUWWn9ifT35o5cb6yWyPtjtDMCMhZyVNTy~Jvp~hJAkf2u8gfzTLPJL77t0X5sz~qAv4xN0cb~T-odEIQrUO~ZIsR8rF1Ouyql564LTGGRAzOS2IhgUC4I4MwOD1xtMlVHokEQdIkp~tk8Ok9Dn0nWxNmFVZtNeAB0RWi7PbbwLEjf1-IF6FslzZgxtHvRSGXx7yFG5s2AE6Gogcw6xZ~EDFAu0DY9EHEsp67rDhh6IxcvlRY1rWze2ufVlmmEgYSpAFOqtP5P23iFWVrRe1lNlOaq8emtiU429cQIa9K0j8wGA40Cdt2r7lyZNWzcb52QMjk4Ww__'; // Fallback image URL
  
//   // Check if images is a valid array and has at least one element
//   const mainImage = (images && Array.isArray(images) && images.length > 0) ? images[0] : defaultImageUrl;

//   return (
//     <Box position="relative" width="588px" height="526px">
//       {/* Main Image */}
//       <img
//         src={mainImage}
//         alt="Main"
//         width="100%"
//         style={{ borderRadius: '8px' }}
//       />

//       <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap="16px" position="relative">

//         {/* Left Arrow */}
//         <IconButton 
//           sx={{ position: 'absolute', left: '70px', top: '50%', transform: 'translateY(-50%)' }}
//         >
//           <ArrowBackIosIcon />
//         </IconButton>

//         {/* Thumbnails (all using the mainImage) */}
//         {[1, 2, 3, 4].map((_, index) => (
//           <img
//             key={index}
//             src={mainImage} // Same image for all thumbnails
//             alt={`Thumbnail ${index + 1}`}
//             width="75px"
//             height="75px"
//             style={{ borderRadius: '8px' }}
//           />
//         ))}

//         {/* Right Arrow */}
//         <IconButton 
//           sx={{ position: 'absolute', right: '70px', top: '50%', transform: 'translateY(-50%)' }}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default ProductImageCarousel;


import { Box, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductImageCarousel = ({ images }) => {
  const defaultImageUrl = 'https://s3-alpha-sig.figma.com/img/dda1/f126/e21479d8602051b0469c5c40d6e2db6e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aTrjqZnmX1VvrhWUWWn9ifT35o5cb6yWyPtjtDMCMhZyVNTy~Jvp~hJAkf2u8gfzTLPJL77t0X5sz~qAv4xN0cb~T-odEIQrUO~ZIsR8rF1Ouyql564LTGGRAzOS2IhgUC4I4MwOD1xtMlVHokEQdIkp~tk8Ok9Dn0nWxNmFVZtNeAB0RWi7PbbwLEjf1-IF6FslzZgxtHvRSGXx7yFG5s2AE6Gogcw6xZ~EDFAu0DY9EHEsp67rDhh6IxcvlRY1rWze2ufVlmmEgYSpAFOqtP5P23iFWVrRe1lNlOaq8emtiU429cQIa9K0j8wGA40Cdt2r7lyZNWzcb52QMjk4Ww__'; // Truncated for clarity
  
  // const mainImage = (images && Array.isArray(images) && images.length > 0) ? images[0] : defaultImageUrl;
  const mainImage = images;

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box 
      position="relative" 
      width={isSmallScreen ? '90%' : '588px'}  
      height={isSmallScreen ? 'auto' : '526px'} 
      margin="0 auto" 
    >
      <img
        src={mainImage}
        alt="Main"
        style={{ 
          width: '100%', 
          height: isSmallScreen ? 'auto' : '100%', 
          borderRadius: '8px', 
          objectFit: 'cover' 
        }}
      />

      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        mt={2} 
        gap="8px" 
        position="relative"
      >
        <IconButton 
          sx={{ 
            position: 'absolute', 
            left: isSmallScreen ? '10px' : '70px', 
            top: '50%', 
            transform: 'translateY(-50%)' 
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {[1, 2, 3, 4].map((_, index) => (
          <img
            key={index}
            src={mainImage}
            alt={`Thumbnail ${index + 1}`}
            style={{ 
              width: isSmallScreen ? '50px' : '75px', 
              height: isSmallScreen ? '50px' : '75px', 
              borderRadius: '8px',
              objectFit: 'cover' 
            }}
          />
        ))}

        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: isSmallScreen ? '10px' : '70px', 
            top: '50%', 
            transform: 'translateY(-50%)' 
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductImageCarousel;
