import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from "./components/Header/Header"
import Home from './pages/Home'
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

// context provider
import AuthProvider from './context/AuthProvider';

// prive routes
import PrivateRoute from './PrivateRoutes/PrivateRoutes';

import MyBookings from './pages/MyBookings';
import RecentBookings from './pages/RecentBookings';
import Dashboard from './pages/Dashboard'
import AdminBookingList from './pages/AdminBookingList';

const App = () => {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Header />

          <Switch>
            <Route exact path='/' component={Home} />

            <PrivateRoute path='/mybookings' component={MyBookings} />

            <Route path='/bookings' component={RecentBookings} />

            {/* // Dashboard Routes             */}
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/admin-bookings' component={AdminBookingList} />

          </Switch>
          <Footer />
        </Router>

        <ToastContainer />
      </AuthProvider>
      
      
    </div>
  )
}

export default App  
