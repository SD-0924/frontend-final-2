import { Box, IconButton, Typography } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function getStars(rating) {
    const fullStar = <i className="fa-solid fa-star"></i>;
    const emptyStar = <i className="fa-regular fa-star"></i>;
  
    let starElements = [];
  
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        starElements.push(<i key={i} className="fa-solid fa-star"></i>);
      } else if (rating > i && rating < i + 1) {
        starElements.push(<i key={i} className="fa-regular fa-star"></i>);
      } else {
        starElements.push(<i key={i} className="fa-regular fa-star"></i>);
      }
    }
  
    return starElements;
  }
export const CardComponent = ({product}) => {

    return (
        <Box sx={{
            height: "422px",
            width: "284px",

        }}>
            <Box component={"img"} src={product.product_image_url} sx={{
                width: "286px",
                height: "286px",
                borderRadius: "10px",
            }}>
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography variant="h6">{product.brand_name}</Typography>
                <IconButton>
                <FavoriteBorderIcon sx={{
                    color: "black",
                }}/>
                </IconButton>
            </Box>
            <Typography component={"p"} sx={{
                color: "#626262",
            }}>{product.name}</Typography>

            {/* Stars and Ratings */}
            <Box sx={
                {
                    display: "flex",
                    gap: "10px",
                    marginTop: "5px",

                }
            }>
                <Box
                    sx={
                        {
                            fontSize: "1.2rem",
                            color: "#FF8C4B",
                        }
                    }>
                    {getStars(product.averageRating)}
                </Box>
                <Typography component={"p"} sx={{
                    color: "#1B4B66",
                    fontWeight: "500",
                }}>{product.NumberOfRatings} Ratings</Typography>

            </Box>

            {/* Price */}
            <Box sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
            }}>
                <Typography component={"p"} sx={{
                    fontWeight: "500",
                }}>${product.price_after_discount}</Typography>
                <Typography component={"p"} sx={{
                    color: "#626262",
                    textDecoration: "line-through",
                    fontSize: "14px",
                }}>${product.price}</Typography>
                <Typography component={"p"} sx={{
                    color: "#E21D1D",
                }}>{product.discount_percentage}% OFF</Typography>
            </Box>
        </Box>
    )
}