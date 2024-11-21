
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import HandPickedCard from '../handpickedcard/HandPickedCard';
import 'swiper/css'

export const HandPickedSlider = (props) => {
    return (
        <Swiper
            spaceBetween={props.spaceBetween}
            slidesPerView={props.slidesPerView}
            breakpoints={{
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },

                525:{
                    slidesPerView: 1.8,
                    spaceBetween: 10,
                },

                700: {
                    slidesPerView: 2.5,
                    spaceBetween: 10,
                },

               

                888: {
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                },

                1300: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                

            }}
        >
            {props.array.map((item, index) => {
                return (<SwiperSlide key={index}>
                    <HandPickedCard image={item.image} title={item.title} />
                </SwiperSlide>
                )
            }
            )}
        </Swiper>

    )
}

HandPickedSlider.propTypes = {
    array: PropTypes.array,
    slidesPerView: PropTypes.number,
    spaceBetween: PropTypes.number
}