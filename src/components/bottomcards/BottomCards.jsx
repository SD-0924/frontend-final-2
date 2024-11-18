import './BottomCards.css';

export const BottomCards = () => {
    return (
        <div className='container'>

            <div className='cards-container'>
                <div className='big-card'>
                    <img src='/bigcard.jpg' />
                    <div className='bigcardtext'>
                        <p>LIFESTYLE</p>

                        <h1>Makeup Accessories from Top Brands</h1>
                    </div>

                </div>
                <div className='small-cards'>
                    <div className='small-card1 small-card'>
                        <img src='/smallcard1edit.jpg' />
                        <div className='smallcardtext'>
                            <h1 className='skincare'>Skincare Essentials</h1>
                        </div>
                        <button className='arrowbutton'><i className="fa-solid fa-arrow-right arrow skincare"></i></button>
                    </div>
                    <div className='small-card'>
                        <img src='/smallcard2.jpg' />
                        <div className='smallcardtext'>
                            <h1 className='facepeels'>Facepacks & Peels</h1>
                            
                        </div>
                        <button className='arrowbutton gray'><i className="fa-solid fa-arrow-right arrow facepeels"></i></button>
                    </div>
                </div>

            </div>
        </div>

    )
}