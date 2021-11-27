import axios from 'axios';
import {NavLink} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify'

const Dashboard = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post(`https://ancient-harbor-94685.herokuapp.com/destination/create`, {
            name: data.name, price: data.price, daytrip: data.daytrip, description: data.description, imageurl: data.imageurl
        })
            .then(result => {
                toast(result.data.message);
                reset();
            })
            .catch(error => console.log(error))
    };


    return (
        <div className='container'>
            <div className="wrapper">
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <div class="list-group">
                            <NavLink to="/dashboard" class="list-group-item list-group-item-action active" aria-current="true">
                                Dashboard
                            </NavLink>
                            <NavLink to="/dashboard" activeClassName={'activeSidebar'} class="list-group-item list-group-item-action">New Destination</NavLink>
                            <NavLink to="/admin-bookings" class="list-group-item list-group-item-action">Bookings</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="card p-5 border-0 shadow">
                            <h4 className='mb-4'>New Destination</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className="form-group mb-3">
                                    <input {...register("name")} className='form-control shadow-none' placeholder='Destination Name' required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type='number' {...register("price")} className='form-control shadow-none' placeholder='Price' required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type='number' {...register("daytrip")} className='form-control shadow-none' placeholder='Total Trip Day' required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type='url' {...register("imageurl")} className='form-control shadow-none' placeholder='Image Url' required />
                                </div>

                                <div className="form-group mb-3">
                                    <textarea {...register("description")} className='form-control shadow-none' required />
                                </div>
                                
                                
                                <input className='btn btn-success' type="submit" value="Add Destination" required />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
