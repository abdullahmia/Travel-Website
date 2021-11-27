import {useState, useEffect} from 'react'
import axios from 'axios'
import Loading from '../components/Loader/Loading'

const RecentBookings = () => {
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
    }, [])

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

export default RecentBookings
