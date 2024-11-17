
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
export const BrandsSlider = (props) => {
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
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4, 
                  spaceBetween: 40,
                },
                1515: {
                    slidesPerView: 6, 
                    spaceBetween: 40,
                  },
               
              }}
        >
            {props.array.map((item, index) => {
                return (<SwiperSlide key={index}>
                   <div className='brandCard'>
                    <img src={item.image}/>
                </div>
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