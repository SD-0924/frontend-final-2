import { HandPickedSlider } from '../handpickedslider/HandPickedSlider';
import './HandPicked.css';
import 'swiper/css'


export const HandPickedCollections = () => {
    return (

        <div className="maindiv">
            <div className='container'>
                <div className='handpicked-comp-container'>
                    <h2>Handpicked Collections</h2>
                    <HandPickedSlider
                        
                        array={[
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                            { image: '/perfume.jpg', title: 'Perfumes' },
                        ]}>

                    </HandPickedSlider>


                </div>
            </div>
        </div>
    )
}