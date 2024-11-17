import './footer.css';

import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/Youtube';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';



export const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-content-container'>
                    <div>
                        <p>Shop By Category</p>
                        <ul>
                            <li><a href='#'>Skincare</a></li>
                            <li><a href='#'>Personal Care</a></li>
                            <li><a href='#'>Handbages</a></li>
                            <li><a href='#'>Apparels</a></li>
                            <li><a href='#'>Watches</a></li>
                            <li><a href='#'>Jewellery</a></li>

                        </ul>
                    </div>


                    <div className='contacts'>
                        <div className='socials'>
                            <div className='socialsButton'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </div>
                            <div className='socialsButton'>
                                <svg fill="#1B4B66" width="25px" height="25px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path> </g></svg>
                            </div>
                            <div className='socialsButton'>
                                <TwitterIcon />
                            </div>
                            <div className='socialsButton'>
                                <YoutubeIcon />
                            </div>

                        </div>
                        <div className="location">
                            <p><FmdGoodOutlinedIcon/>United States</p>
                        </div>
                        <p className='rights'>© 2021 | Cora Leviene All Rights Reserved</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}
