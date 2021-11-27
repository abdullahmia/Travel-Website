import aboutImage from '../../media/images/about.png'

const Review = () => {
    return (
        <div>
             <div class="about wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-12 mb-lg-0 mb-4">
                            <h5>Testimonials</h5>
                            <h2>What people say about Us.</h2>
                        </div>
                        <div class="col-lg-4 col-md-12 col-12">
                            <img src={aboutImage} class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
