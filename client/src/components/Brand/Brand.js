import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './brand.css'

// images for dummny
import brand1 from '../../media/images/brand-1.png'
import brand2 from '../../media/images/brand-2.png'
import brand3 from '../../media/images/brand-3.png'
import brand4 from '../../media/images/brand-4.png'
import brand5 from '../../media/images/brand-5.png'


const Brand = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
        <div className='container my-3 mb-5'>
            <Slider {...settings}>
                <div className='brand'>
                    <img src={brand1} alt="" />
                </div>
                <div className='brand'>
                    <img src={brand2} alt="" />
                </div>
                <div className='brand'>
                    <img src={brand3} alt="" />
                </div>
                <div className='brand'>
                    <img src={brand4} alt="" />
                </div>
                <div className='brand'>
                    <img src={brand5} alt="" />
                </div>
                <div className='brand'>
                    <img src={brand5} alt="" />
                </div>

                
            </Slider>
        </div>
    )
}

export default Brand
