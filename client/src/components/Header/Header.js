import {NavLink, Link} from 'react-router-dom'
import useAuth from '../../context/useAuth'
import logo from '../../media/images/logo.png'
import './header.css'

const Header = () => {
    const {user, handleGoogleSignIn, handleSignOut} = useAuth();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top border border-top-0 border-start-0 border-end-0 navigation-wrap">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="far fa-align-left"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' exact activeClassName={'active'} className="nav-link">home</NavLink>
                            </li>
                            {
                                user?.email ? (<li className="nav-item">
                                <NavLink to='/mybookings' exact activeClassName={'active'} className="nav-link">my booking</NavLink>
                            </li>) : ''
                            }

                            

                            <li className="nav-item">
                                <NavLink to='/bookings' exact activeClassName={'active'} className="nav-link">recent booking</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/dashboard' exact activeClassName={'active'} className="nav-link">Dashboard</NavLink>
                            </li>

                            

                        </ul>
                        <div className="ms-auto">

                            {
                                user?.email ? (
                                    <div className="d-flex align-items-center">
                                        <p>{user.displayName}</p>
                                        <p onClick={handleSignOut} className='ms-4 fw-bold'>Logout</p>
                                    </div>
                                
                                    ) : <button onClick={handleGoogleSignIn} className='signup-btn'><i className="fab fa-google"></i></button>
                            }

                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
