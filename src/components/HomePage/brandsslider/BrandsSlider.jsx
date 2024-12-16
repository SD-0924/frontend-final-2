
// import { Swiper, SwiperSlide } from 'swiper/react';
// import PropTypes from 'prop-types';
// import { BrandsCard } from '../brandscard/BrandsCard';


// export const BrandsSlider = (props) => {
//     return (
//         <Swiper
//             spaceBetween={props.spaceBetween}
//             slidesPerView={props.slidesPerView}
//             breakpoints={{
//                 320: {
//                     slidesPerView: 2,
//                     spaceBetween: 1,
//                 },
//                 540: {
//                     slidesPerView: 3,
//                     spaceBetween: 20,
//                 },
//                 888: {
//                     slidesPerView: 4,
//                     spaceBetween: 30,
//                 },
//                 1024: {
//                     slidesPerView: 6,
//                     spaceBetween: 40,
//                 },

//             }}
//         >
//             {props.array.map((item, index) => {
//                 return (<SwiperSlide key={index}>
//                     <BrandsCard props={item} />
//                 </SwiperSlide>
//                 )
//             }
//             )}
//         </Swiper>

//     )
// }

// BrandsSlider.propTypes = {
//     array: PropTypes.array,
//     slidesPerView: PropTypes.number,
//     spaceBetween: PropTypes.number
// }

import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { BrandsCard } from '../brandscard/BrandsCard';

export const BrandsSlider = ({ array = [], slidesPerView, spaceBetween }) => {
    if (!Array.isArray(array)) {
        console.error("Invalid data passed to BrandsSlider");
        return null;
    }

    return (
        <Swiper
            spaceBetween={spaceBetween} // Use destructured value
            slidesPerView={slidesPerView} // Use destructured value
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                540: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                888: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                },
            }}
        >
            {array.map((item, index) => ( // Use destructured value
                <SwiperSlide key={index}>
                    <BrandsCard {...item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

BrandsSlider.propTypes = {
    array: PropTypes.array,
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number,
};
