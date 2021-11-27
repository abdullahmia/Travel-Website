import Loader from "../Loader/Loading"
import DestinationCard from "./DestinationCard"
import './destination.css'

const Destinatoins = ({destinations}) => {

    return (
        <div>
            <div className="destination wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h5>Top Selling</h5>
                            <h2>Top Destinations</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {
                            destinations.map((destination, key) => (
                                <div className="col-lg-4 col-md-6 col-12 mb-5">
                                    <DestinationCard destination={destination} />
                                </div>
                            ))
                        }
                        
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Destinatoins
