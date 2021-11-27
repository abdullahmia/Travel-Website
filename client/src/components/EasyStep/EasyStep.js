import easyStep from '../../media/images/easy-step.png'
import group1 from '../../media/images/group-1.png'
import group2 from '../../media/images/group-2.png'
import group3 from '../../media/images/group-3.png'
import './easystep.css'

const EasyStep = () => {
    return (
        <div>
            <div class="easy-step wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-12 mb-lg-0 mb-5">
                            <h5>Easy and Fast</h5>
                            <h2>Book your next trip in 3 easy steps</h2>

                            <div class="d-flex align-items-center mb-3 mt-3 featured">
                                <div class="featured__icon">
                                    <img src={group1} class="img-fluid" alt="" />
                                </div>
                                <div class="featured__detail">
                                    <p class="fw-bold">Choose Destination</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center mb-3 featured">
                                <div class="featured__icon">
                                    <img src={group2} class="img-fluid" alt="" />
                                </div>
                                <div class="featured__detail">
                                    <p class="fw-bold">Make Payment</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-3 featured">
                                <div class="featured__icon">
                                    <img src={group3} class="img-fluid" alt="" />
                                </div>
                                <div class="featured__detail">
                                    <p class="fw-bold">Reach Airport on Selected Date</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus.</p>
                                </div>
                            </div>

                        </div>


                        <div class="col-lg-6 col-md-12 col-12 easy-step-img">
                            <img src={easyStep} class="img-fluid float-right" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EasyStep
