import travelImg from '../../media/images/traveller-1.png'
import './banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-5">
                            <h4>Best Destinations around the world</h4>
                            <h1>Travel, enjoy and live a new and full life</h1>
                            <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate
                            sell they west hard for the.</p>
                            <div className="d-flex align-items-center mt-4 hero__btns">
                                <a href="#" className="more-btn me-4">find out more</a>
                                <a className="d-flex align-items-center" href="#"><i className="fas fa-play-circle"></i> play demo</a>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <img src={travelImg} className="img-fluid" alt="Travel Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
