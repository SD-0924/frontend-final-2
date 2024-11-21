
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { BrandsCard } from '../brandscard/BrandsCard';

export const BrandsSlider = (props) => {
    return (
        <Swiper
            spaceBetween={props.spaceBetween}
            slidesPerView={props.slidesPerView}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 1,
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
            {props.array.map((item, index) => {
                return (<SwiperSlide key={index}>
                    <BrandsCard image={item.image} />
                </SwiperSlide>
                )
            }
            )}
        </Swiper>

    )
}

BrandsSlider.propTypes = {
    array: PropTypes.array,
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number
}