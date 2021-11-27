import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form";
import './subcribe.css'


const Subcribe = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post(`http://localhost:8000/subscribe/create`, {
            email:data.email
        })
            .then(result => {
                toast(result.data.message);
                reset();
            })
            .catch(error => console.log(error))
    };

    

    return (
        <div className='container my-5 py-3'>
            <div className="text-center subcribe wrapper">
                <h2>Subscribe to get information, latest news and other <br /> interesting offers about Cobham</h2>
                
                <div className="form mt-5">
                    <form id='subcribeform' onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-75 mx-auto">
                            <div className="d-flex">
                                <input {...register("email")} className="form-control rounded-0 shadow-none border-0 w-75" placeholder='Your Email Address' required />
                                {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your email' className="form-control rounded-0 shadow-none border-0 w-75" required /> */}
                                <button className="more-btn border-0 rounded-0 w-25 ms-3">Subcribe</button>
                            </div>        
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Subcribe
