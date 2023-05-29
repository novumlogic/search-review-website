import { useRouter } from 'next/router';
// import awardImg from '../assets/img-tamplate-2/assets-temp-2/award.jpg';
import { useState, useEffect, useRef } from "react";
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import { StandaloneSearchBox, LoadScript, Autocomplete } from "@react-google-maps/api";


function ProfileRating({ awardData }) {
  // let currentTab = 0; // Current tab is set to be the first tab (0)
  const router = useRouter();

 
  // currentTab = router.query.step ? Number(router.query.step) : currentTab;
  const inputRef = useRef();
  const [currentTab, setCurrentTab] = useState(router.query.step ? Number(router.query.step) : 0);
  const query = router.query.id ? router.query.id : '';
  const [userId, setUserId] = useState(query ? query : '');
  const [rating, setRating] = useState(router.query.rating ? Number(router.query.rating) : 0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setReviewSubmit] = useState(false);
  const [options, setOptions] = useState({ city: '', state: '' });

  useEffect(() => {
    showTab(currentTab); // Display the current tab
    if (router.isReady) {
      setRating(router.query.rating);
    }
  }, []);

  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    // if (n == 0) {
    //   document.getElementById("prevBtn").style.display = "none";
    // } else {
    //   document.getElementById("prevBtn").style.display = "inline";
    // }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
  }

  async function nextPrev(n) {
    const x = document.getElementsByClassName("step");

    if (n == 1 && !validateForm(true)) return false;

    if (n === 1) {
      await handleSubmit();
    } else if (n === -1) {
      x[currentTab].style.display = "none";
      setCurrentTab(0);
      showTab(0);
    }
  }

  function validateForm(fromButton) {
    if(document.getElementById("city-name").value.trim() == ""){
      document.getElementById("state-name").value = "";
    }
    // This function deals with validation of the form fields
    var x, y, z, i, valid = true;
    x = document.getElementsByClassName("step");
    y = x[currentTab].querySelectorAll("input, select");
    z = x[currentTab].getElementsByTagName("textarea")[0];
    // A loop that checks every input field in the current tab:
    var role_radio = document.querySelector('input[name="contractorRole"]:checked');
    var wwc_radio = document.querySelector('input[name="workedWithContractor"]:checked');
    var pay_exp_radio = document.querySelector('input[name="paymentExp"]:checked');
    for (i = 0; i < y.length; i++) {
      let placeholder = y[i].nextElementSibling;
      // console.log(y[i].id);
      if(y[i].id == "city-name") placeholder = y[i].closest("div").nextElementSibling;
      if(y[i].id == "state-name") placeholder = document.getElementById("city-name").closest("div").nextElementSibling;
      // console.log(placeholder);
      let ph = y[i].closest(".input-group");
      // If a field is empty...
      if (y[i].value == "") {
        if (fromButton) {
          // add an "invalid" class to the field:
          y[i].className += " invalid";

          if (placeholder.classList.contains('invalid-feedback')) {
            placeholder.classList.add("d-block");
          } else {
            ph.nextSibling.classList.add("d-block");
          }
        }
        // and set the current valid status to false
        valid = false;
      } else {
        y[i].classList.remove("invalid");
        placeholder.classList.remove("d-block");
        if (ph) {
          ph.nextSibling.classList.remove("d-block");
        }
      }
    }
    
    if(currentTab == 0) {
      // console.log(role_radio);
      if (role_radio == null) {
        if (fromButton) document.querySelector(".role_radio").classList.add("d-block");
        valid = false;
      } else {
        document.querySelector(".role_radio").classList.remove("d-block");
      }
      var c_no_el = document.getElementById("gcNo");
      var c_no = c_no_el.value;
      if(c_no.match(/^\d{10}$/) != null){
        if (fromButton) c_no_el.nextElementSibling.classList.remove("d-block");
      }else{
        if (fromButton) c_no_el.nextElementSibling.classList.add("d-block");
        valid = false;
      }
    }
    if(currentTab == 1) {
      if (wwc_radio == null) {
        if (fromButton) document.querySelector(".wwc_radio").classList.add("d-block");
        valid = false;
      } else {
        document.querySelector(".wwc_radio").classList.remove("d-block");
      }
      if(z && z.value == ""){
        z.className += " invalid";
        z.nextSibling.classList.add("d-block");
      }else{
        z.classList.remove("invalid");
        z.nextSibling.classList.remove("d-block");
      }
      if (pay_exp_radio == null) {
        if (fromButton) document.querySelector(".pay_exp_radio").classList.add("d-block");
        valid = false;
      } else {
        if (fromButton) document.querySelector(".pay_exp_radio").classList.remove("d-block");
      }
      var m_no_el = document.getElementById("yourNo");
      var m_no = m_no_el.value;
      if(m_no.match(/^\d{10}$/) != null){
        if (fromButton) m_no_el.nextElementSibling.classList.remove("d-block");
      }else{
        if (fromButton) m_no_el.nextElementSibling.classList.add("d-block");
        valid = false;
      }
    }
    
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
      document.getElementById("nextBtn").classList.remove("disabled");
    } else {
      document.getElementById("nextBtn").classList.add("disabled");
    }
    return valid; // return the valid status
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("stepIndicator");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }

  const handleSubmit = async (e) => {
    const x = document.getElementsByClassName("step");
    const contractorForm = document.getElementById('addGcProfileRatingForm');
    if (currentTab === 0) {
      const data = {
        "phoneNumber": contractorForm.gcNo.value.trim(),
        "companyName": contractorForm.gcCompanyName.value.trim(),
        "city": contractorForm.gcLocation.value.trim(),
        "state": contractorForm.stateName.value.trim(),
        "designation": contractorForm.contractorRole.value === 'other' ? contractorForm.otherRole.value : contractorForm.contractorRole.value,
        "name": contractorForm.gcName.value.trim(),
        "source": "REVIEW_WEBSITE"
      };
      setFormData(prev => { return { ...prev, formOne: data }; });
      x[currentTab].style.display = "none";
      setCurrentTab(1);
      showTab(1);
    }
    else if (currentTab === 1) {
      let uId = userId ? userId : '';
      if (!userId) {
        const requestOptionsFormOne = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData.formOne)
        };

        await fetch('${process.env.BASE_URL}/gateway/review-website/customer/create', requestOptionsFormOne)
          .then(response => response.json())
          .then(resp => {
            setUserId(resp?.payload?.customerId);
            uId = resp?.payload?.customerId;
          });
      }

      const data = {
        "userType": "DEFAULT",
        "userId": uId,
        "reviewerHandsOn": contractorForm.workedWithContractor.value === 'True' ? true : false,
        "reviewerUserType": "customer",
        "reviewerUserName": contractorForm.customerName.value.trim(),
        "reviewerPhoneNumber": contractorForm.yourNo.value.trim(),
        "reviewerRating": rating, //1,2,3,4,5
        "reviewerPaymentExperience": contractorForm.paymentExp.value,
        "reviewerDescription": contractorForm.overallExp.value.trim(),
      };
      setFormData(prev => { return { ...prev, formTwo: data }; });
      const requestOptionsFormTwo = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      await fetch('${process.env.BASE_URL}/gateway/review-website/customer/review/create', requestOptionsFormTwo)
        .then(response => response.json())
        .then(data => {
          if (data?.statusCode && data?.statusCode !== 200) {
            swal("Oops! ", data?.developerInfo, "error").then(val => {
              setCurrentTab(1);
              showTab(1);
            });
          } else {
            setReviewSubmit(true);
            document.getElementById("addGcProfileRatingForm").reset();
            setRating(0);
          }
        });
    }
  };

  const handleSearch = (query) => {
    try {
      let place = inputRef.current.getPlace();
      const city = place?.name;
      let state = place.formatted_address.slice(place.formatted_address.indexOf(',') + 2, place.formatted_address.lastIndexOf(','));
      state = state?.split(',')[0] ? state?.split(',')[0] : ''
      setOptions({ city, state });
      document.getElementById('city-name').value = city;
    } catch (error) {
      // console.log(error)
    }
  };

  return (
    <>
      <Header />
      <header className="bg-yellow py-10">
      </header>
      <section className="pb-5">
        <div className="container px-lg-5 px-sm-3">
          <div className="row gx-5">
            <div className="col-lg-12">
              {!isSubmitted ?
                <div className="text-center">
                  <div className="step1-title">
                    <h2 className="fw-bolder m-0">Add General Contractor Details</h2>
                    <p className="lead mb-5">Help others choose better partner to work with</p>
                  </div>
                  <div className="step2-title d-none">
                    <h2 className="fw-bolder m-0">Add Your Rating (100% Anonymous)</h2>
                    <p className="lead mb-5">Help others choose better partner to work with</p>
                  </div>
                </div>
                : null}
              <div className="card py-lg-5 px-lg-5 p-sm-3">
                <div className="">
                  <div className="px-lg-5 pt-3">
                    {!isSubmitted ?
                      <form id="addGcProfileRatingForm" onSubmit={(e) => { e.preventDefault(); }}>
                        <div className="form-header d-flex justify-content-around align-items-center mb-5">
                          <button className="stepIndicator btn btn-rounded px-lg-4">
                            <span className="d-none d-md-block">Contractor details</span>
                            <span className="d-none d-sm-block d-lg-none"><i class="bi bi-person-check-fill"></i></span>
                          </button>
                          <span className="step-divider flex-grow-1"></span>
                          <button className="stepIndicator btn btn-rounded px-lg-4">
                            <span className="d-none d-md-block">Your Rating</span>
                            <span className="d-none d-sm-block d-lg-none"><i class="bi bi-star-fill text-yellow"></i></span>
                          </button>
                        </div>

                        <div className="step">
                          <div className="mb-3">
                            <label htmlFor="gcCompanyName" className="form-label">General Contractor's Company
                              Name*</label>
                            <input className="form-control" type="text"
                              placeholder="eg: ABC Constriction Puvt Ltd, ABC Enterprises"
                              name="gcCompanyName" onKeyUp={(e) => validateForm(false)} />
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please fill this field.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="siteLocation" className="form-label">Site Location*</label>
                            {/* <select className="form-select" aria-label="Default select" defaultValue={"0"} name='gcLocation' onChange={(e) => validateForm(false)}>
                              <option value="">Select site location</option>
                              <option value="Bangaluru">Bengaluru</option>
                              <option value="Pune">Pune</option>
                              <option value="Mumbai">Mumbai</option>
                            </select> */}
                            <div className="row g-2">
                              <div className="col-lg-6">
                                <LoadScript googleMapsApiKey={process.env.API_KEY} libraries={["places"]}>
                                  <Autocomplete
                                    onLoad={ref => inputRef.current = ref}
                                    onPlaceChanged={handleSearch}
                                    options={{
                                      types: ['(cities)'],
                                      componentRestrictions: {country: "in"}
                                     }}
                                  >
                                    <input
                                      type="text"
                                      id='city-name'
                                      className="form-control"
                                      placeholder="Enter City"
                                      name='gcLocation'
                                      onKeyUp={(e) => validateForm(false)}
                                    />
                                  </Autocomplete>
                                </LoadScript>
                                <div class="invalid-feedback test">
                                  <i class="bi bi-exclamation-triangle"></i> City and State cannot be empty.
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <input id="state-name" className="form-control" type="text"
                                  placeholder="State"
                                  name="stateName" readOnly value={options.state} />
                              </div>
                            </div>                            
                          </div>
                          <div className="mb-3">
                            <label htmlFor="gcName" className="form-label">Name of Contractor*</label>
                            {/* <div className="input-group"> */}
                              {/* <div className="form-floating form-floating-group flex-grow-1"> */}
                                <input className="form-control" type="text" placeholder="eg: Rishabh Sharma" name="gcName" onKeyUp={(e) => validateForm(false)} />
                                {/* <i className="bi bi-x input-btn-r"></i> */}
                              {/* </div>
                            </div> */}
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please fill this field.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Contractor Role*</label>
                            <div className="row g-0">
                              <div className="col-lg-6">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="contractorRole" id="contractorRole1" value='COMPANY_DIRECTOR' onChange={(e) => validateForm(false)} />
                                  <label className="form-check-label mb-3" htmlFor="contractorRole1">
                                    CEO/ Director / Owner
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="contractorRole" id="contractorRole2" value='SITE_ENGINEER' onChange={(e) => validateForm(false)} />
                                  <label className="form-check-label mb-3" htmlFor="contractorRole2">
                                    Site Engineer
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-check">
                                  <input className="form-check-input" type="radio" name="contractorRole" id="contractorRole3" value='PROJECT_MANAGER' onChange={(e) => validateForm(false)} />
                                  <label className="form-check-label mb-3" htmlFor="contractorRole3">
                                    Project Manager
                                  </label>
                                </div>
                                {/* <div className="form-check">
                                <input className="form-check-input" type="radio" name="contractorRole" id="contractorRole4" value='other' />
                                <label className="form-check-label mb-3" htmlFor="contractorRole4">
                                  Other
                                </label>
                                <input className="form-control" type="text" placeholder="" name="otherRole" />
                              </div> */}
                              </div>
                              <div class="invalid-feedback role_radio">
                                <i class="bi bi-exclamation-triangle"></i> Please select role.
                              </div>
                            </div>

                          </div>
                          <div className="mb-3">
                            <label htmlFor="gcNo" className="form-label">Contractor Phone No.*</label>
                            {/* <div className="input-group">
                              <div className="form-floating form-floating-group flex-grow-1"> */}
                                <input className="form-control" type="tel" placeholder="eg: 8765430000" id="gcNo" name="gcNo" onKeyUp={(e) => validateForm(false)} />
                                {/* <i className="bi bi-x input-btn-r"></i>
                              </div>
                            </div> */}
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please enter 10 digit number.
                            </div>
                          </div>
                        </div>

                        <div className="step">
                          <div className="mb-3">
                            <label className="form-label">Have you worked with this contractor?</label>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="workedWithContractor" id="workedWithContractor1" value="True"/>
                              <label className="form-check-label mb-3" htmlFor="workedWithContractor1">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="workedWithContractor" id="workedWithContractor2" value="False" />
                              <label className="form-check-label mb-3" htmlFor="workedWithContractor2">
                                No
                              </label>
                            </div>
                            <div class="invalid-feedback wwc_radio">
                              <i class="bi bi-exclamation-triangle"></i> Please select one option.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="ratings" className="form-label">Rate your experience with “Contractor Company Name”</label>
                            <div className="ratingsContainer" id='ratings'>
                              <div className="ratings d-flex justify-content-between">
                                {[...Array(5)].map((star, index) => {
                                  index += 1;
                                  return (<i className={`bi ${index <= (hover || rating) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}
                                    onClick={() => setRating(index)}
                                    onMouseEnter={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                  ></i>);
                                })}
                              </div>
                              <div className="d-flex justify-content-between">
                                <p className="small text-muted">Very bad</p>
                                <p className="small text-muted">Very good</p>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">How was payment experience?</label>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="paymentExp" id="paymentExp1" value='GOT_PAID_IN_TIME' onChange={(e) => validateForm(false)} />
                              <label className="form-check-label mb-3" htmlFor="paymentExp1">
                                Got paid in time
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="paymentExp" id="paymentExp2" value='DELAYED_PAYMENT' onChange={(e) => validateForm(false)} />
                              <label className="form-check-label mb-3" htmlFor="paymentExp2">
                                Payment got delayed from promised date
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="paymentExp" id="paymentExp3" value='MONEY_STUCK' onChange={(e) => validateForm(false)} />
                              <label className="form-check-label mb-3" htmlFor="paymentExp3">
                                Money Got Stuck
                              </label>
                            </div>
                            <div class="invalid-feedback pay_exp_radio">
                              <i class="bi bi-exclamation-triangle"></i> Please select your payment experience.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="overallExp" className="form-label">How was your overall experience?(100% Anonymous)</label>
                            <textarea className="form-control" placeholder="Kindly share details about their payment speed, paper work,  professionalism etc" name="overallExp" id='overallExp' onKeyUp={(e) => validateForm(false)}></textarea>
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please fill this field.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="customerName" className="form-label">Your Name (we will never share your name)</label>
                            <input className="form-control" type="text" placeholder="Enter your name" name="customerName" id='customerName' onKeyUp={(e) => validateForm(false)}/>
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please fill this field.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="yourNo" className="form-label">Your Phone No.(we will never share your number)</label>
                            {/* <div className="input-group"> */}
                            {/* <div className="form-floating form-floating-group flex-grow-1"> */}
                            <input className="form-control" type="text" placeholder="9566939222" name="yourNo" id='yourNo' onKeyUp={(e) => validateForm(false)} />
                            <div class="invalid-feedback">
                              <i class="bi bi-exclamation-triangle"></i> Please enter 10 digit number.
                            </div>
                            {/* <span className="badge bg-secondary bg-opacity-50 input-btn-r">verify</span> */}
                            {/* </div> */}
                            {/* </div> */}

                          </div>
                        </div>

                        <div className="form-footer d-flex mt-5">
                          {/* <button type="submit" className="btn bg-yellow btn-rounded px-4" id="prevBtn" onClick={(e) => nextPrev(-1)}>Previous</button> */}
                          <button type="button" className="btn bg-yellow btn-rounded px-4 disabled" id="nextBtn" onClick={(e) => nextPrev(1)}>Next</button>
                        </div>
                      </form>
                      :
                      <div className='d-flex justify-content-center flex-column my-5 py-5'>
                        <div className="step2-title text-center mt-5 pt-5">
                          <h2 className="fw-bolder m-0">Rating Submitted Successfully!</h2>
                          <p className="lead mb-5 pt-4 mt-2">We have received your rating, <br /> Once pproved, the same will be visible on the contractor profile.</p>
                        </div>
                        <a href='/add-gc-profile-rating' className="my-2 btn btn-warning fw-bold btn-rounded px-5 w-auto my-0 mx-auto">Add another review</a>
                        <Link href='/' className='text-center d-block mt-2'>Go to home</Link>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProfileRating;
