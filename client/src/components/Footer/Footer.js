import { Link } from 'react-router-dom'
import logo from '../../media/images/logo.png'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={logo} alt="" className='mb-4' />
                        <p className="">Book your trip in minute, get full Control for much longer.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <ul className="footer_menu">
                            <li className="mb-3"><Link className="fw-bold" to="/">Company</Link></li>
                            <li className="mb-2"><Link to='/'>About</Link></li>
                            <li className="mb-2"><Link to='/'>Testimonials</Link></li>
                            <li className="mb-2"><Link to='/'>Find a doctor</Link></li>
                            <li className="mb-2"><Link to='/'>Apps</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <ul className="footer_menu">
                            <li className="mb-3"><Link className="fw-bold" to="/">Company</Link></li>
                            <li className="mb-2"><Link to='/'>About</Link></li>
                            <li className="mb-2"><Link to='/'>Testimonials</Link></li>
                            <li className="mb-2"><Link to='/'>Find a doctor</Link></li>
                            <li className="mb-2"><Link to='/'>Apps</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="text-center mt-3">
                    <p>All rights reserved@jadoo.co</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
