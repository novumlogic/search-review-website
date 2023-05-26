import whatsappImg from '../../public/assets/whatsapp 1.svg'
import ReviewImg from '../../public/assets/joel-filipe-RFDP7_80v5A-unsplash.jpg'
import mappinImg from '../../public/assets/Map_Pin.svg'
import userImg from '../../public/assets/User_01.svg'

import phoneImg from '../../public/assets/Phone.svg'

import { useState, useEffect } from "react";
function Constractorprofile({ awardData }) {



  return (
    <>
      <header class="bg-yellow py-10">
      </header>
      <section class="pb-5 search-section">
        <div class="container px-5">
          <div class="row gx-5">
            <div class="col-lg-12">
              <p class="small mb-3">Reviews  Search  <strong>Sobha Buildscape</strong></p>
              <div class="card p-5 ps-lg-10 pb-4">
                <div class="row">
                  <div class="col-lg-2">
                    <div class="feature position-relative rounded-3 overflow-hidden bs-4">
                      <img src={ReviewImg} class="img-fluid"/>
                    </div>
                  </div>
                  <div class="col-lg-10">
                    <h2 class="h5">Sobha Buildscape</h2>
                    <div class="d-flex justify-content-start flex-column">
                      <div class="d-flex flex-row align-items-center">
                        <img class="nav-icon me-1" src={mappinImg} />
                        <p class ="m-0 fw-bold">Mumbai, Maharashtra</p>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <img class="nav-icon me-1" src={userImg}/>
                        <p class ="m-0">General Contractor</p>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <img class="nav-icon me-1" src={phoneImg}/>
                        <p class ="m-0">Phone: *****89087</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row gx-0">
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-start align-items-center pt-2">
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
                  </div>
                </div>
                <a href="" class="btn-wa-share text-decoration-none">
                  <div class="py-2 px-4 d-flex align-items-center">
                    <span class="me-2">Share Profile</span>
                    <img src={whatsappImg} class="img-fluid" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-5">
        <div class="container px-5 mb-5">
          <div class="row gx-5 pt-4">
            <div class="col-lg-8">
              <div class="card px-5 py-4">
                <div class="row gx-0 single-review">
                  <div class="col-lg-12">
                    <div class="pb-4">
                      <a class="fw-semibold" href="#!">Detailed Reviews</a>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-start align-items-center py-2">
                      <div class="ratings">
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star text-yellow"></i>
                      </div>
                    </div>
                    <p class="">
                      Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                    <span class="text-muted">
                      Posted on: 12 Jan, 2022
                    </span>
                    <hr />
                  </div>
                  <div class="col-lg-12">
                    <div class="d-flex justify-content-start align-items-center py-2">
                      <div class="ratings">
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star-fill text-yellow"></i>
                        <i class="bi bi-star text-yellow"></i>
                      </div>
                    </div>
                    <p class="">
                      Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                    <span class="text-muted">
                      Posted on: 12 Jan, 2022
                    </span>
                  </div>
                </div>
                <div class="text-center mt-5 ">
                  <a class="fw-semibold d-flex flex-column" href="#!">
                    <span class="pb-2">View more</span>
                    <i class="bi bi-caret-down-fill"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card add-rating-card p-0 text-center">
                <div class="px-4 pt-2 bg-opacity-10 bg-yellow">
                  <h2 class="h4">Add Your Rating</h2>
                  <p class="text-muted">Less than 2 min | 100% anonymus</p>
                </div>
                <div class="px-4 py-3 d-flex justify-content-start align-items-center">
                  <h2 class="h5">How was your payment experience
                    with <span class="fw-bold">Shobha Buildscapes</span></h2>
                </div>
                <div class="px-10 ratings d-flex justify-content-between">
                  <i class="bi bi-star text-yellow"></i>
                  <i class="bi bi-star text-yellow"></i>
                  <i class="bi bi-star text-yellow"></i>
                  <i class="bi bi-star text-yellow"></i>
                  <i class="bi bi-star text-yellow"></i>
                </div>
                <div class="px-10 d-flex justify-content-between">
                  <p class="small text-muted">Very bad</p>
                  <p class="small text-muted">Very good</p>
                </div>
                <div class="px-4">
                  <button type="button" class="my-3 btn btn-warning fw-bold btn-rounded px-5">Add Rating</button>
                  <p class="small fw-normal">We will never share your name and number</p>
                </div>
              </div>
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

export default Constractorprofile;
