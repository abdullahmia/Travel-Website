import {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import Loading from '../components/Loader/Loading'
import useAuth from '../context/useAuth'

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true);
    const [deleteCount, setDeleteCount] = useState(0)

    const {user} = useAuth();
    useEffect(() =>  {
        axios.get(`https://ancient-harbor-94685.herokuapp.com/booking/user/${user.email}`)
            .then(result => {
                setBookings(result.data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [deleteCount])


    const handleDeleteBooking = (id) => {
        axios.delete(`https://ancient-harbor-94685.herokuapp.com/booking/delete/${id}`)
            .then(result => {
                toast(result.data.message);
                setDeleteCount(deleteCount + 1)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='container my-5'>

        {
            loading ? <Loading /> : (
                <table className="table mb-5">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>
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
                                    <td><button onClick={() => handleDeleteBooking(book._id)} className='btn btn-danger shadow-none'><i className="fas fa-trash"></i></button></td>
                                </tr>
                            ))
                        }
                        
                        
                    </tbody>
                </table>
            )
        }

            
        </div>
    )
}

export default MyBookings
