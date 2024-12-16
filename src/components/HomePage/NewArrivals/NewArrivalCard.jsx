// import { Box, IconButton, Typography } from "@mui/material"
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// export const NewArrivalCard = () => {
//     return (
//         <Box sx={{
//             height: "422px",
//             width: "284px",

//         }}>
//             <Box component={"img"} src="/images/pinkbag.png" sx={{
//                 width: "286px",
//                 height: "286px",
//                 borderRadius: "10px",
//             }}>
//             </Box>

//             <Box sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//             }}>
//                 <Typography variant="h6">Grande</Typography>
//                 <IconButton>
//                     <FavoriteBorderIcon sx={{
//                         color: "black",
//                     }} />
//                 </IconButton>
//             </Box>
//             <Typography component={"p"} sx={{
//                 color: "#626262",
//             }}>Blossom Pouch</Typography>

//             {/* Stars and Ratings */}
//             <Box sx={
//                 {
//                     display: "flex",
//                     gap: "10px",
//                     marginTop: "5px",

//                 }
//             }>
//                 <Box
//                     sx={{
//                             fontSize: "1.2rem",
//                             color: "#FF8C4B",
//                         }
//                     }><i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-solid fa-star"></i>
//                     <i className="fa-regular fa-star"></i>
//                 </Box>
//                 <Typography component={"p"} sx={{
//                     color: "#1B4B66",
//                     fontWeight: "500",
//                 }}>43 Ratings</Typography>

//             </Box>

//             {/* Price */}
//             <Box sx={{
//                 display: "flex",
//                 gap: "5px",
//                 alignItems: "center",
//             }}>
//                 <Typography component={"p"} sx={{
//                     fontWeight: "500",
//                 }}>$39.49</Typography>
//                 <Typography component={"p"} sx={{
//                     color: "#626262",
//                     textDecoration: "line-through",
//                     fontSize: "14px",
//                 }}>$78.66</Typography>
//                 <Typography component={"p"} sx={{
//                     color: "#E21D1D",
//                 }}>50% OFF</Typography>
//             </Box>
//         </Box>
//     )
// }



import { Box, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const NewArrivalCard = ({ product }) => {
    return (
        <Box sx={{
            height: "422px",
            width: "284px",
        }}>
            {/* Product Image */}
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
                {/* Brand Name */}
                <Typography variant="h6">{product.brand_name}</Typography>
                <IconButton>
                    <FavoriteBorderIcon sx={{
                        color: "black",
                    }} />
                </IconButton>
            </Box>
            {/* Product Name */}
            <Typography component={"p"} sx={{
                color: "#626262",
            }}>{product.name}</Typography>

            {/* Stars and Ratings */}
            <Box sx={{
                display: "flex",
                gap: "10px",
                marginTop: "5px",
            }}>
                {/* Star Rating */}
                <Box
                    sx={{
                        fontSize: "1.2rem",
                        color: "#FF8C4B",
                    }}
                >
                    {[...Array(5)].map((_, index) => (
                        <i key={index} className={`fa-solid fa-star ${index < 4 ? '' : 'fa-regular'}`}></i>
                    ))}
                </Box>
                {/* Rating Count */}
                <Typography component={"p"} sx={{
                    color: "#1B4B66",
                    fontWeight: "500",
                }}>43 Ratings</Typography>
            </Box>

            {/* Price and Discount */}
            <Box sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
            }}>
                {/* Price After Discount */}
                <Typography component={"p"} sx={{
                    fontWeight: "500",
                }}>${product.price_after_discount.toFixed(2)}</Typography>
                {/* Original Price */}
                <Typography component={"p"} sx={{
                    color: "#626262",
                    textDecoration: "line-through",
                    fontSize: "14px",
                }}>${product.price.toFixed(2)}</Typography>
                {/* Discount Percentage */}
                <Typography component={"p"} sx={{
                    color: "#E21D1D",
                }}>{product.discount_percentage}% OFF</Typography>
            </Box>
        </Box>
    );
};
