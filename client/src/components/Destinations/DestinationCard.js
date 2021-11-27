import {toast} from 'react-toastify'
import useAuth from '../../context/useAuth'
import axios from 'axios';


const DestinationCard = ({destination}) => {
    const {user} = useAuth();

    const handleBookign = () => {

        if(!user?.email) {
            toast("Sgin in your account to book a trip");
        }else {
            const data = {
                name: user.displayName,
                email: user.email,
                status: 'pending',
                destination: destination._id    
            }
            
            axios.post('https://ancient-harbor-94685.herokuapp.com/booking/create', {
                data
            })
                .then(result => {
                    toast(result.data.message);
                })
                .catch(error => {
                    console.log(error)
                })
        
        }

        

    }


    return (
        <div className="card border-0">
            <img src={destination.imageurl} className="img-fluid destination__image" alt="" />
            <div className="p-4">
                <div className="d-flex justify-content-between">
                    <h5>{destination.name}</h5>
                    <p>${destination.price}k</p>
                </div>
                <div className="">
                    <p><i className="fad fa-paper-plane me-2"></i> {destination.daytrip} Days Trip</p>
                    <button onClick={handleBookign} className='btn shadow-none text-muted book__btn'>Book Now <i className="fas fa-calendar-week ms-2"></i></button>
                </div>
            </div>

        </div>
    )
}

export default DestinationCard
