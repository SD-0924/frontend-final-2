import { BrandsSlider } from '../brandsslider/BrandsSlider';
import './shopbybrands.css';
export const ShopByBrands = () => {
    return (

        <div className='container'>

                <div className='brandsContainer'>
                    <h2>Shop By Brands</h2>
                    <BrandsSlider
                        slidesPerView={6}
                        spaceBetween={20}
                        array={[
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                            { image: '/zaralogo.svg' },
                        ]}
                    >
                    </BrandsSlider>
                </div>

          
        </div>
    )
}
