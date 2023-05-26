import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';

import elipse from "../assets/Ellipse 389.png";
import elipseFull from "../assets/Ellipse full.png";
import engineerImage from "../assets/engineer-uniform-holding-white-helmet__2.png";
import engineerImageMobile from "../assets/engineer-uniform-holding-white-helmet__2_-removebg-preview 2.png";
import Profile from "../assets/joel-filipe-RFDP7_80v5A-unsplash.jpg";
import Rating from "../assets/verified-ratings.svg";
import Investment from "../assets/find-investment-rupees.svg";
import Calander from "../assets/badge-calendar.svg";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = ({contractorsList}) => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e) => {
        if(searchValue.trim() === '') return false
        router.push({
            pathname: '/search-result',
            query: {
                query: searchValue.trim(),
                pageNumber: 0,
                pageSize: 10
            }
        });
    };

const handleEnter = (e) => {
    if(searchValue.trim() === '') return false
    console.log(e.key);
    if (e.key === 'Enter') {            
        document.getElementById("btn-search").click();
    }        
}

    return (
        <>
            {/* <!-- Header--> */}
            <Header />
            <header className="bg-yellow py-md-10 py-lg-10 home-header">
                <div className="container px-lg-5 px-sm-4">
                    <div className="row gx-5">
                        <div className="col-lg-8">
                            <div className="my-5">
                                <h2 className="fw-bolder mb-2 text-sm-center text-lg-start">Choose the right partner for your <br />construction work</h2>
                                <p className="lead lead-sm mb-4">Search Contractors | View Reviews | Add Ratings </p>
                                <div className="d-grid gap-3 d-sm-flex">
                                    <div className="input-group input-group-lg mb-3">
                                        <span className="input-group-text pe-md-1"><i className="bi bi-search"></i></span>
                                        <input type="text" className="form-control ps-sm-1" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={(e) => handleEnter(e)} placeholder="Search contractors by name" />
                                        <button id="btn-search" className="btn btn-dark px-5" type="button" onClick={(e) => handleSearch(e)}>Search</button>
                                    </div>
                                </div>
                                <p>Search and view reviews of 100+ (and growing) contractors all over India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-bgs">
                    <Image className="img-fluid img-eclipse d-none d-lg-block" src={elipse} alt="Elipse" />
                    <Image className="img-fluid img-eclipse d-none d-sm-block d-md-none" src={elipseFull} alt="Elipse" />
                    <Image className="img-fluid img-character d-none d-lg-block" src={engineerImage} alt="Engineer" />
                    <Image className="img-fluid img-character d-none d-sm-block d-md-none" src={engineerImage} alt="Engineer" />
                </div>
            </header>
            {/* <!-- Popular Contractors section--> */}
            <section className="py-lg-5 popular-contractors">
                <div className="container px-lg-5 px-sm-4 my-5">
                    <div className="text-center mb-lg-5">
                        <h3 className="fw-bold decorated"><span>Popular Contractors on ProjectHero</span></h3>
                    </div>
                    <div className="row gx-5 pt-4">
                        {contractorsList?.map((elm, index) =>
                            <div className="col-lg-4 mb-5 mb-lg-0 " key={index}>
                                <div className="card h-100">
                                <Link href={`/contractor-profile?id=${elm?.customerId}`} className="text-decoration-none">
                                    <div className="p-4 mb-5">
                                        <div className="d-flex align-items-sm-center flex-column">
                                            <div className="feature position-relative rounded-circle overflow-hidden bs-4 mb-3">
                                                <Image src={elm?.profilePicture ? elm.profilePicture : Profile} className="img-fluid" width={80} height={113} alt="Joel fillip" />
                                            </div>
                                            <h2 className="h4 text-sm-center">{elm.companyName}</h2>
                                            <p className="text-black text-opacity-75 text-light mb-0 text-sm-center">{`${elm.city ? elm?.city + ' | ' : ''}${elm.designation}`}</p>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-evenly">
                                            <div className="ratings">
                                                {[...Array(5)].map((star, index) => {
                                                    index += 1;
                                                    return (<i className={`bi ${index <= (parseInt(elm?.rating)) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}></i>);
                                                })}
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="badge bg-success fw-bold">{elm.rating ? elm?.rating : 0}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="g-0 btn-btm-fixed">
                                        <Link href={`/contractor-profile?id=${elm?.customerId}`} className="btn btn-warning fw-bold p-3">View Contractor</Link>
                                    </div>
                                </Link>
                                </div>
                            </div>
                        )}
                        <Link className="text-center mt-lg-5 fw-semibold" href={`/search-result?pageNumber=0&pageSize=10`}>View All Contractors <i
                            className="bi bi-chevron-right"></i></Link>
                    </div>
                </div>
            </section>
            {/* <!-- CTA section--> */}
            <section className="bg-opacity-10 bg-yellow py-lg-5 cta">
                <div className="container px-5 my-5 pb-sm-5">
                    <div className="row gx-5 justify-content-center">
                        {/* <!-- Pricing card free--> */}
                        <div className="col-lg-6 col-xl-6">
                            <div className="p-lg-5 py-sm-5 text-sm-center text-md-start">
                                <h2><span className="fw-bold text-decoration-underline">Did not find the contractor
                                </span><br />you're looking for?</h2>
                                <h5 className="mt-3">If the contractor is not listed on ProjectHero, you can still rate them in just
                                    3 easy steps!</h5>
                                <Link href="/add-gc-profile-rating" className="mt-lg-5 mt-sm-3 btn btn-warning fw-bold btn-rounded px-5">+ Add
                                    Profile</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="px-lg-5 py-1">
                                <div className="d-flex align-items-center">
                                    <div className="steps me-3">
                                        <span>1</span>
                                    </div>
                                    <span className="h5">Contractor Details</span>
                                </div>
                                <span className="line"></span>
                                <div className="d-flex align-items-center">
                                    <div className="steps me-3">
                                        <span>2</span>
                                    </div>
                                    <span className="h5">Rate them as per your experience</span>
                                </div>
                                <span className="line"></span>
                                <div className="d-flex align-items-center">
                                    <div className="steps me-3">
                                        <span>3</span>
                                    </div>
                                    <span className="h5">Authenticate your rating by OTP</span>
                                </div>
                                <span className="line"></span>
                                <div className="d-flex align-items-center">
                                    <div className="steps me-3">
                                        <span><i className="bi bi-check"></i></span>
                                    </div>
                                    <span className="h5">Once approved, review will be visible to all</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Why PH section--> */}
            <section className="py-lg-5" id='reviews'>
                <div className="container px-lg-5 px-sm-4 my-5">
                    <div className="text-lg-center mb-5">
                        <h3 className="fw-bold"><span>Why ProjectHero Reviews?</span></h3>
                        <p>1000s of contractors visit ProjectHero to check reviews about general contractor before picking up
                            new work</p>
                    </div>
                    <div className="row gx-5 pt-lg-4">
                        <div className="col-lg-4 mb-5 mb-lg-0 ">
                            <div className="p-lg-4">
                                <div className="d-flex flex-column">
                                    <div className="feature rounded-circle mb-3" style={{ backgroundColor: '#D9EAFD' }}>
                                        <Image src={Rating} className="img-fluid" alt="Ratings" />
                                    </div>
                                    <h2 className="h4">Verified Ratings</h2>
                                    <p className="text-black text-opacity-75 text-light mb-0">Authenticated ratings from fellow
                                        contractors verified by ProjectHero team</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0 ">
                            <div className="p-lg-4">
                                <div className="d-flex flex-column">
                                    <div className="feature rounded-circle mb-3" style={{ backgroundColor: '#FDF7D9' }}>
                                        <Image src={Investment} className="img-fluid" alt="Investment" />
                                    </div>
                                    <h2 className="h4">Payment reviews</h2>
                                    <p className="text-black text-opacity-75 text-light mb-0">Information about General contractors
                                        payment behaviour</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-5 mb-lg-0 ">
                            <div className="p-lg-4">
                                <div className="d-flex flex-column">
                                    <div className="feature rounded-circle mb-3" style={{ backgroundColor: '#E5D9FD' }}>
                                        <Image src={Calander} className="img-fluid" alt="Calander" />
                                    </div>
                                    <h2 className="h4">PH score</h2>
                                    <p className="text-black text-opacity-75 text-light mb-0">Information about General contractors
                                        payment behaviour</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- PH Trust section--> */}
            <section className="py-5 bg-opacity-10 bg-yellow border-bottom">
                <div className="container px-lg-5 px-sm-3 my-lg-5 ph-trust">
                    <div className="mb-lg-5">
                        <h3 className="fw-bold"><span>Contractors' Trust on ProjectHero</span></h3>
                    </div>
                    <div className="row gx-5 pt-4">
                        <div className="col-lg-4 mb-lg-0 ">
                            <div className="card">
                                <div className="p-lg-5 p-sm-3">
                                    <div className="d-flex flex-column">
                                        <div className="ratings">
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                        </div>
                                        <p className="text-black pt-2 mb-0 ph-review three-lines-text">
                                            Thanks to ProjectHero, now I can have peace of mind knowing the reviews of the contractor am planning to work with.
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-sm-center">
                                        <div className="feature position-relative rounded-circle overflow-hidden bs-4 me-3">
                                            <Image src={Profile} className="img-fluid" alt="joel philip" />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold m-0">Anand Mahija</h5>
                                            <p className="text-black text-opacity-75 text-light mb-0">Delhi</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-3 mb-lg-0 ">
                            <div className="card">
                                <div className="p-lg-5 p-sm-3">
                                    <div className="d-flex flex-column">
                                        <div className="ratings">
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                        </div>
                                        <p className="text-black pt-2 mb-0 ph-review three-lines-text">
                                            Finally, I can share my honest reviews about GCs who are delaying my payments after so many months of follow ups.
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-sm-center">
                                        <div className="feature position-relative rounded-circle overflow-hidden bs-4 me-3">
                                            <Image src={Profile} className="img-fluid" alt="Joel fillip" />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold m-0">B N Patil</h5>
                                            <p className="text-black text-opacity-75 text-light mb-0">Mumbai</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-0 mt-sm-3 mt-lg-0">
                            <div className="card">
                                <div className="p-lg-5 p-sm-3">
                                    <div className="d-flex flex-column">
                                        <div className="ratings">
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                            <i className="bi bi-star-fill text-yellow"></i>
                                        </div>
                                        <p className="text-black pt-2 mb-0 ph-review three-lines-text">
                                            Quite helpful to hear from more people about particular GC rather than hearing from only one or two in my network.
                                        </p>
                                    </div>
                                    <hr />
                                    <div className="d-flex align-items-sm-center">
                                        <div className="feature position-relative rounded-circle overflow-hidden bs-4 me-3">
                                            <Image src={Profile} className="img-fluid" alt="Joel fillip" />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold m-0">Mahesh Rao</h5>
                                            <p className="text-black text-opacity-75 text-light mb-0">Bengaluru</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- FAQs section--> */}
            <section className="py-5">
                <div className="container px-lg-5 px-sm-3 my-lg-5">
                    <div className="text-lg-center mb-lg-5">
                        <h3 className="fw-bold"><span>Frequently Asked Questions</span></h3>
                    </div>
                    <div className="row gx-5 pt-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How does ProjectHero authenticate ratings and reviews?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                            All reviews are authenticated by mobile number OTP before submission. 
                                            Reviews are approved by the PH moderation team
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why are reviewers' names and phone numbers not shared?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        Reviews are posted anonymously to protect relationships and business opportunities and to provide an opportunity for honesty in reviews. To protect privacy, users are not allowed to identify themselves, their company, or any contact information in the review.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Does ProjectHero edit or block the reviews?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        ProjectHero will not edit reviews for content but will moderate reviews for compliance with its guidelines. We will not suppress, hide, reorder, or delete content solely because it is a negative or positive review about a contractor. Reviews with inappropriate or offensive language, threats of violence, or reviews that mention an individual’s race, religion, nationality, gender, or sexual orientation, or otherwise relate to any protected class will not be published.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How can I improve my rating?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        Share your profile with contractors who have worked with you in the past and are currently working with you. Ask them to share their honest review about a great payment experience. Your score will improve as more contractors share positive ratings and review about you.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Can I edit my review after submitting it?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        Currently, reviews can not be edited after submission.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        Can I reply to a review on my profile?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        Currently, you can not reply to reviews. In the coming weeks, you will be able to do so after claiming your profile.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading7">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                        I have more questions about the profile and reviews. How can I reach out to the ProjectHero team?
                                    </button>
                                </h2>
                                <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="mx-2 px-2 left-outline">
                                        Kindly drop an email to <a href="mailto:marketing@projecthero.in">marketing@projecthero.in</a> with your query and phone number.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Home;
