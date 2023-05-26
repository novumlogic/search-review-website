import awardImg from '../img-tamplate-2/assets-temp-2/award.jpg'

import { useState, useEffect } from "react";
function ProfileRating({ awardData }) {

  

  return (
    <>
      <header class="bg-yellow py-10">
      </header>
      <section class="pb-5">
        <div class="container px-5">
          <div class="row gx-5">
            <div class="col-lg-12">
              <div class="text-center">
                <div class="step1-title">
                  <h2 class="fw-bolder m-0">Add General Contractor Details</h2>
                  <p class="lead mb-5">Help others choose better partner to work with</p>
                </div>
                <div class="step2-title d-none">
                  <h2 class="fw-bolder m-0">Add Your Rating (100% Anonymous)</h2>
                  <p class="lead mb-5">Help others choose better partner to work with</p>
                </div>
              </div>
              <div class="card py-5 px-5">
                <div class="">
                  <div class="px-5 pt-3">
                    <form id="addGcProfileRatingForm" action="#!">
                      <div class="form-header d-flex justify-content-around align-items-center mb-5">
                        <button class="stepIndicator btn btn-rounded px-4">Contractor details</button>
                        <span class="step-divider flex-grow-1"></span>
                        <button class="stepIndicator btn btn-rounded px-4">Your Rating</button>
                      </div>

                      <div class="step">
                        <div class="mb-3">
                          <label for="gcCompanyName" class="form-label">General Contractor's Company
                            Name*</label>
                          <input class="form-control" type="text"
                            placeholder="eg: ABC Constriction Puvt Ltd, ABC Enterprises"
                            name="gcCompanyName" />
                        </div>
                        <div class="mb-3">
                          <label for="siteLocation" class="form-label">Site Location*</label>
                          <select class="form-select" aria-label="Default select">
                            <option selected>Select site location</option>
                            <option value="1">Bengaluru</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div class="mb-3">
                          <label for="gcName" class="form-label">Name of Contractor*</label>
                          <div class="input-group">
                            <div class="form-floating form-floating-group flex-grow-1">
                              <input class="form-control" type="text" placeholder="eg: Swasthi" name="gcName" />
                              <i class="bi bi-x input-btn-r"></i>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Contractor Role*</label>
                          <div class="row g-0">
                            <div class="col-lg-6">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="contractorRole" id="contractorRole1" />
                                <label class="form-check-label mb-3" for="contractorRole1">
                                  CEO/ Director / Owner
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="contractorRole" id="contractorRole2" checked />
                                <label class="form-check-label mb-3" for="contractorRole2">
                                  Site Engineer
                                </label>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="contractorRole" id="contractorRole3" />
                                <label class="form-check-label mb-3" for="contractorRole3">
                                  Project Manager
                                </label>
                              </div>
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="contractorRole" id="contractorRole4" checked />
                                <label class="form-check-label mb-3" for="contractorRole4">
                                  Other
                                </label>
                                <input class="form-control" type="text" placeholder="" name="otherRole" />
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="mb-3">
                          <label for="gcNo" class="form-label">Contractor Phone No.*</label>
                          <div class="input-group">
                            <div class="form-floating form-floating-group flex-grow-1">
                              <input class="form-control" type="text" placeholder="eg: 8765430000" name="gcNo" />
                              <i class="bi bi-x input-btn-r"></i>
                            </div>
                          </div>

                        </div>
                        <div class="mb-3">
                          <label class="form-label">Have you worked with this contractor?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="workedWithContractor" id="workedWithContractor1" />
                            <label class="form-check-label mb-3" for="workedWithContractor1">
                              Yes
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="workedWithContractor" id="workedWithContractor2" checked />
                            <label class="form-check-label mb-3" for="workedWithContractor2">
                              No
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="step">
                        <div class="mb-3">
                          <label for="overallExp" class="form-label">Rate your experience with “Contractor Company Name”</label>
                          <div class="ratingsContainer">
                            <div class="ratings d-flex justify-content-between">
                              <i class="bi bi-star text-yellow"></i>
                              <i class="bi bi-star text-yellow"></i>
                              <i class="bi bi-star text-yellow"></i>
                              <i class="bi bi-star text-yellow"></i>
                              <i class="bi bi-star text-yellow"></i>
                            </div>
                            <div class="d-flex justify-content-between">
                              <p class="small text-muted">Very bad</p>
                              <p class="small text-muted">Very good</p>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">How was payment experience?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="paymentExp" id="paymentExp1" />
                            <label class="form-check-label mb-3" for="paymentExp1">
                              Got paid in time
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="paymentExp" id="paymentExp2" checked />
                            <label class="form-check-label mb-3" for="paymentExp2">
                              Payment got delayed from promised date
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="paymentExp" id="paymentExp3" checked />
                            <label class="form-check-label mb-3" for="paymentExp3">
                              Money Got Stuck
                            </label>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="overallExp" class="form-label">How was your overall experience?(100% Anonymous)</label>
                          <textarea class="form-control" placeholder="Kindly share details about their payment speed, paper work,  professionalism etc"
                            name="overallExp"></textarea>
                        </div>
                        <div class="mb-3">
                          <label for="yourName" class="form-label">Your Name (we will never share your name)</label>
                          <input class="form-control" type="text" placeholder="Enter your name"
                            name="yourName" />
                        </div>
                        <div class="mb-3">
                          <label for="yourNo" class="form-label">Your Phone No.(we will never share your number)</label>
                          <div class="input-group">
                            <div class="form-floating form-floating-group flex-grow-1">
                              <input class="form-control" type="text" placeholder="9566939222" name="yourNo" />
                              <span class="badge bg-secondary bg-opacity-50 input-btn-r">verify</span>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="form-footer d-flex mt-5">
                        <button type="button" class="btn bg-yellow btn-rounded px-4" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                        <button type="button" class="btn bg-yellow btn-rounded px-4" id="nextBtn" onclick="nextPrev(1)">Next</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileRating;
