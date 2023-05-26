import '../css-template-2/Review.css';
import verifiedImg from '../../public/assets/verified-ratings.svg'
import investmentImg from '../../public/assets/find-investment-rupees.svg'
import calenderImg from '../../public/assets/badge-calendar.svg'


function Review({ awardData }) {

  return (
    <section class="py-5" id='reviews'>
      <div class="container px-5 my-5">
        <div class="text-center mb-5">
          <h3 class="fw-bold"><span>Why ProjectHero Reviews?</span></h3>
          <p>1000s of contractors visit ProjectHero to check reviews about general contractor before picking up
            new work</p>
        </div>
        <div class="row gx-5 pt-4">
          <div class="col-lg-4 mb-5 mb-lg-0 ">
            <div class="p-4">
              <div class="d-flex flex-column">
                <div class="feature rounded-circle project-review-box mb-3 review-img" >
                  <img src={verifiedImg} class="img-fluid"/>
                </div>
                <h2 class="h4">Verified Ratings</h2>
                <p class="text-black text-opacity-75 text-light mb-0">Authenticated ratings from fellow
                  contractors verified by ProjectHero team</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0 ">
            <div class="p-4">
              <div class="d-flex flex-column">
                <div class="feature rounded-circle project-review-box mb-3 review-img">
                  <img src={investmentImg} class="img-fluid"/>
                </div>
                <h2 class="h4">Payment reviews</h2>
                <p class="text-black text-opacity-75 text-light mb-0">Information about General contractors
                  payment behaviour</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-5 mb-lg-0 ">
            <div class="p-4">
              <div class="d-flex flex-column">
                <div class="feature rounded-circle project-review-box mb-3 review-img" >
                  <img src={calenderImg} class="img-fluid"/>
                </div>
                <h2 class="h4">PH score</h2>
                <p class="text-black text-opacity-75 text-light mb-0">Information about General contractors
                  payment behaviour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
