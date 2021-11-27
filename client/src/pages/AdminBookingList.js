import {useState, useEffect} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {toast} from 'react-toastify'
import Loading from '../components/Loader/Loading'

const AdminBookingList = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        axios.get(`https://ancient-harbor-94685.herokuapp.com/booking`)
            .then(result => {
                setBookings(result.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [bookings])  



    const handleDeleteBooking = (id) => {
        axios.delete(`https://ancient-harbor-94685.herokuapp.com/booking/delete/${id}`)
            .then(result => {
                toast(result.data.message);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Booking confirm method

    const handleConfrimBooking = (id) => {
        axios.put(`https://ancient-harbor-94685.herokuapp.com/booking/update/${id}`)
            .then((result) => {
                toast(result.data.message)
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='container my-5'>

        {
            loading ? <Loading /> : (
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div class="list-group">
                            <NavLink to="#" class="list-group-item list-group-item-action active" aria-current="true">
                                Dashboard
                            </NavLink>
                            <NavLink to="/dashboard" activeClassName={'activeSidebar'} class="list-group-item list-group-item-action">New Destination</NavLink>
                            <NavLink to="/admin-bookings" class="list-group-item list-group-item-action">Bookings</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <h3>All the bookings</h3>
                        <table className="table mb-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Confirm</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    {
                                        bookings.map((book, key) => (
                                            <tr>
                                                <th><img src={book.destination.imageurl} className='table__img' alt="" /></th>
                                                <td>{book.name}</td>
                                                <td>{book.email}</td>
                                                <td>{book.status}</td>
                                                <td><button onClick={() => handleConfrimBooking(book._id)} className='btn btn-primary text-light shadow-none'><i className="fad fa-shield-check"></i></button></td>
                                                <td><button onClick={() => handleDeleteBooking(book._id)} className='btn btn-danger shadow-none'><i className="fas fa-trash"></i></button></td>
                                            </tr>
                                        ))
                                    }
                                    
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            )
        }

            
        </div>
    )
}

export default AdminBookingList
