import awardImg from '../img-tamplate-2/assets-temp-2/award.jpg'


function CTA({ awardData }) {

  return (
    <section class="bg-opacity-10 bg-yellow py-5">
      <div class="container px-5 my-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-6 col-xl-6">
            <div class="p-5">
              <h2><span class="fw-bold text-decoration-underline">Did not find the contractor
              </span><br />you're looking for?</h2>
              <h5 class="mt-3">If the contractor is not listed on ProjectHero, you can still rate them in just
                3 easy steps!</h5>
              <button type="button" class="mt-5 btn btn-warning fw-bold btn-rounded px-5">+ Add
                Profile</button>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6">
            <div class="px-5 py-1">
              <div class="d-flex align-items-center">
                <div class="steps me-3">
                  <span>1</span>
                </div>
                <span class="h5">Contractor Details</span>
              </div>
              <span class="line"></span>
              <div class="d-flex align-items-center">
                <div class="steps me-3">
                  <span>2</span>
                </div>
                <span class="h5">Rate them as per your experience</span>
              </div>
              <span class="line"></span>
              <div class="d-flex align-items-center">
                <div class="steps me-3">
                  <span>3</span>
                </div>
                <span class="h5">Authenticate your rating by OTP</span>
              </div>
              <span class="line"></span>
              <div class="d-flex align-items-center">
                <div class="steps me-3">
                  <span><i class="bi bi-check"></i></span>
                </div>
                <span class="h5">Once approved, review will be visible to all</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
