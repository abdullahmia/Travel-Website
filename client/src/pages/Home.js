import {useState, useEffect} from 'react'
import axios from 'axios'
import Banner from "../components/Banner/Banner"
import Destinatoins from "../components/Destinations/Destinatoins"
import Loading from '../components/Loader/Loading'
import EasyStep from '../components/EasyStep/EasyStep'
import Review from '../components/Review/Review'
import Brand from '../components/Brand/Brand'
import Subcribe from '../components/Subcribe/Subcribe'


const Home = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(destinations);

    useEffect(() => {
        axios.get(`https://ancient-harbor-94685.herokuapp.com/destination`)
          .then((result) => {
                setDestinations(result.data.result);
                setLoading(false);
        })
          .catch((error) => {
              console.log(error);

          })
    }, [])

    return (
        <div>
            <Banner />
            {
                loading ? <Loading /> : <Destinatoins destinations={destinations} />

            }
            <EasyStep />
            <Review />
            <Brand />
            <Subcribe />
        </div>
    )
}

export default Home