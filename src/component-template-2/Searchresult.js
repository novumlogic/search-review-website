import whatsappImg from '../../public/assets/whatsapp 1.svg'
import ReviewImg from '../../public/assets/joel-filipe-RFDP7_80v5A-unsplash.jpg'
import mappinImg from '../../public/assets/Map_Pin.svg'
import userImg from '../../public/assets/User_01.svg'

import phoneImg from '../../public/assets/Phone.svg'

import { useState, useEffect } from "react";
function Searchresult({ awardData }) {



  return (
    <>
      <header class="bg-yellow py-10">
      </header>
      <section class="pb-5 search-section">
        <div class="container px-5">
          <div class="row gx-5">
            <div class="col-lg-12">
              <p class="small mb-3">Reviews  <strong>Search</strong></p>
              <div class="card p-5">
                <div>
                  <h2 class="fw-bolder mb-2 text-center">Choose the right partner for your construction work</h2>
                  <p class="lead mb-4 text-center">Search contractors and find their reviews or add a review of contractors you’ve worked with! </p>
                </div>
                <div class="d-flex justify-content-center">
                  <div class="d-grid gap-3 d-sm-flex px-5 pt-3 search-container">
                    <div class="input-group input-group-lg mb-3">
                      <span class="input-group-text pe-1"><i class="bi bi-search"></i></span>
                      <input type="text" class="form-control" placeholder="Search General Contractor by Name or Phone Number"/>
                      <span class ="input-group-text input-icon-r"><i class ="bi bi-x"></i></span>
                      <button class ="btn btn-dark px-5" type ="button">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pb-5 d-none">
        <div class="container px-5 mb-5">
          <div class="row gx-5">
            <div class="col-lg-12 mb-3 d-flex justify-content-center">
              <img src="assets/no-contractor-found.svg" class="img-fluid"/>
            </div>
            <div class="col-lg-12 mb-3">
              <h4 class="text-center mb-3">Sorry! We could not find any contractor for “Sobha”.</h4>
              <h4 class="text-center">You can also add a profile for the contractor you’re looking for!</h4>
            </div>
            <div class="col-lg-4 offset-lg-4 mb-3 d-flex justify-content-center">
              <button type="button" class="mt-5 btn btn-warning fw-bold btn-rounded px-5">+ Add Profile</button>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5">
        <div class="container px-5 mb-5">
          <p class="small mb-3">Showing 1 result for Sobha</p>
          <div class="row gx-5 pt-4">
            <div class="col-lg-12 mb-3 ">
              <div class="card p-4">
                <div class="row">
                <div class="col-lg-2">
                    <div class="feature position-relative rounded-3 overflow-hidden bs-4">
                      <img src={ReviewImg} class="img-fluid" />
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <h2 class="h5">Sobha Buildscape</h2>
                    <div class="d-flex justify-content-start align-items-center">
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={mappinImg} />
                        <p class="m-0 fw-bold">Mumbai, Maharashtra</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={userImg} />
                        <p class="m-0">General Contractor</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={phoneImg} />
                        <p class="m-0">Phone: *****89087</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-0">
                  <div class="col-lg-2">
                  </div>
                  <div class="col-lg-10">
                    <div class="d-flex justify-content-start align-items-center py-2">
                      <h5 class="m-0 small">Rating: </h5>
                      <div class="ratings mx-2">
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star text-yellow"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-success fw-bold">4.5</span>
                      </div>
                    </div>
                    <div class="pt-3">
                      <a class="text-center fw-semibold" href="#!">View Reviews</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class="card p-4">
                <div class="row">
                <div class="col-lg-2">
                    <div class="feature position-relative rounded-3 overflow-hidden bs-4">
                      <img src={ReviewImg} class="img-fluid" />
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <h2 class="h5">Sobha Buildscape</h2>
                    <div class="d-flex justify-content-start align-items-center">
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={mappinImg} />
                        <p class="m-0 fw-bold">Mumbai, Maharashtra</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={userImg} />
                        <p class="m-0">General Contractor</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={phoneImg} />
                        <p class="m-0">Phone: *****89087</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-0">
                  <div class="col-lg-2">
                  </div>
                  <div class="col-lg-10">
                    <div class="d-flex justify-content-start align-items-center py-2">
                      <h5 class="m-0 small">Rating: </h5>
                      <div class="ratings mx-2">
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star text-yellow"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-success fw-bold">4.5</span>
                      </div>
                    </div>
                    <div class="pt-3">
                      <a class="text-center fw-semibold" href="#!">View Reviews</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-3">
              <div class="card p-4">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="feature position-relative rounded-3 overflow-hidden bs-4">
                      <img src={ReviewImg} class="img-fluid" />
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <h2 class="h5">Sobha Buildscape</h2>
                    <div class="d-flex justify-content-start align-items-center">
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={mappinImg} />
                        <p class="m-0 fw-bold">Mumbai, Maharashtra</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={userImg} />
                        <p class="m-0">General Contractor</p>
                      </div>
                      <div class="d-flex flex-row align-items-center me-lg-4">
                        <img class="nav-icon me-1" src={phoneImg} />
                        <p class="m-0">Phone: *****89087</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row gx-0">
                  <div class="col-lg-2">
                  </div>
                  <div class="col-lg-10">
                    <div class="d-flex justify-content-start align-items-center py-2">
                      <h5 class="m-0 small">Rating: </h5>
                      <div class="ratings mx-2">
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star text-yellow"></i>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-success fw-bold">4.5</span>
                      </div>
                    </div>
                    <div class="pt-3">
                      <a class="text-center fw-semibold" href="#!">View Reviews</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5 ">
              <a class="fw-semibold d-flex flex-column" href="#!">
                <span class="pb-2">View more</span>
                <i class="bi bi-caret-down-fill"></i></a>
            </div>

          </div>
        </div>
      </section>
      <section class="bg-opacity-10 bg-yellow py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-6 col-xl-6">
              <div class="p-5">
                <h2><span class="fw-bold text-decoration-underline">Did not find the contractor
                </span><br />you're looking for?</h2>
                <h5 class="mt-3">If the contractor is not listed on ProjectHero, you can still rate them in just
                  3 easy steps!</h5>
                <button type="button" class="mt-5 btn btn-warning fw-bold btn-rounded px-5">+ Add Profile</button>
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

    </>
  );
}

export default Searchresult;
