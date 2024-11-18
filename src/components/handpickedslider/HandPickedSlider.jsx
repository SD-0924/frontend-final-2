
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
export const HandPickedSlider = (props) => {
    return (
        <Swiper
            spaceBetween={props.spaceBetween}
            slidesPerView={props.slidesPerView}
            breakpoints={{
                
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                
                888: {
                  slidesPerView: 3, 
                  spaceBetween: 40,
                },

                1300: {
                    slidesPerView: 4, 
                    spaceBetween: 40,
                  },
                  1515: {
                    slidesPerView: 4, 
                    spaceBetween: 40,
                  }
               
              }}
        >
            {props.array.map((item, index) => {
                return (<SwiperSlide key={index}>
                    <div className="handpickedcard">
                        <img src={item.image} alt={item.title} />
                        <h5>{item.title}</h5>
                    </div>
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