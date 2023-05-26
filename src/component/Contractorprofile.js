import whatsappImg from '../assets/whatsapp 1.svg';
import ReviewImg from '../assets/joel-filipe-RFDP7_80v5A-unsplash.jpg';
import mappinImg from '../assets/Map_Pin.svg';
import userImg from '../assets/User_01.svg';
import Header from './Header';
import Footer from './Footer';
import phoneImg from '../assets/Phone.svg';

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Constractorprofile ({ contractorDetails, reviews }) {
  const router = useRouter();
  const query = router.query.id ? router.query.id : '';
  const pNo = router.query.pageNumber ? Number(router.query.pageNumber) : '';
  const pSize = router.query.pageSize ? Number(router.query.pageSize) : '';
  const [userId, setUserId] = useState(query ? query : '');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState('');
  const [pageSize, setPageSize] = useState(3);
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    if (router.isReady) {
      setUserId(query);
      setPageNum(pNo);
      setPageSize(pSize);
      setLoading(false);

      const host = window.location.host;
      const baseUrl = `https://${host}`;
      setOgUrl(`${baseUrl}${router.pathname}`);
    }
  }, [router.isReady, router.asPath]);

  const getReviews = async (page) => {
    let newpg = page ? pageNum + page : pageNum + 1;
    let newpgSz = 3;
    router.push(`/contractor-profile?id=${userId}&pageNumber=${newpg}&pageSize=${newpgSz}`, undefined,
      {query: {
        id: userId,
        pageNumber: page ? pageNum + page : pageNum,
        pageSize: pageSize + 3
      },
      scroll:false
    });
  };

  return (
    <>
      <Header />
      <header className="bg-yellow py-10">
      </header>
      <section className="pb-lg-5 search-section">
        <div className="container px-lg-5 px-sm-3">
          <div className="row gx-5">
            <div className="col-lg-12">
              <p className="small mb-3">Reviews {">"} Search {">"} <strong>{contractorDetails?.companyName}</strong></p>
              <div className="card p-lg-5 ps-lg-10 pb-lg-4 py-sm-4 px-sm-3">
                <div className="row">
                  <div className="col-lg-2">
                    <div className="feature feature-full position-relative rounded-3 overflow-hidden bs-4">
                    <Image src={ contractorDetails?.profilePicture ? contractorDetails?.profilePicture : ReviewImg} alt='review' className="img-fluid" width={100} height={150} />
                    </div>
                  </div>
                  <div className="col-lg-10">
                    <h2 className="h5">{contractorDetails?.companyName}</h2>
                    <div className="d-flex justify-content-start flex-column">
                      {contractorDetails?.city ?
                      <div className="d-flex flex-row align-items-center">
                        <Image className="nav-icon me-1" src={mappinImg} alt='mapping' />
                        <p className="m-0 fw-bold">{contractorDetails?.city}</p>
                      </div>
                      : null}
                      {contractorDetails?.designation ?
                      <div className="d-flex flex-row align-items-center">
                        <Image className="nav-icon me-1" src={userImg} alt='user' />
                        <p className="m-0">{contractorDetails?.designation}</p>
                      </div>
                      : null}
                      {contractorDetails?.phoneNumber ?
                      <div className="d-flex flex-row align-items-center">
                        <Image className="nav-icon me-1" src={phoneImg} alt='phone' />
                        <p className="m-0">{`Phone: ${contractorDetails?.phoneNumber}`}</p>
                      </div>
                      : null}
                    </div>
                  </div>
                </div>
                <hr className="d-none d-lg-block d-md-none"/>
                <div className="row gx-0">
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-start align-items-center pt-2">                      
                      <h5 className="m-0 small">Rating: {contractorDetails?.rating ? null : <span>No ratings yet</span> }</h5>                      
                      {contractorDetails?.rating ?
                      <div className="ratings mx-2">
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (<i className={`bi ${index <= (parseInt(contractorDetails?.rating)) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}></i>);
                        })}                        
                      </div>
                      : null}
                      {contractorDetails?.rating ?
                      <div className="d-flex align-items-center">
                        <span className="badge bg-success fw-bold">{contractorDetails?.rating ? contractorDetails?.rating : 0}</span>
                      </div>
                      : null}
                    </div>
                  </div>
                </div>
                <hr className="d-none d-sm-block d-md-none"/>
                <Link href={`whatsapp://send?text=Check out ${contractorDetails?.companyName}'s reviews on ProjectHero. If you have worked with them in past then you can also add your rating in just 1 minute via this link.
 ${ogUrl}?id=${userId}`} className="btn-wa-share text-decoration-none" data-action="share/whatsapp/share">
                  <div className="py-2 px-4 d-flex justify-content-sm-center align-items-center">
                    <span className="me-2">Share Profile</span>
                    <Image src={whatsappImg} alt='whatsapp' className="img-fluid" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="container px-lg-5 px-sm-3 mb-5">
          <div className="row d-none d-sm-block d-md-none">
            <div className="col-lg-12">
              <Link href={`/add-gc-profile-rating?id=${userId}&step=1&rating=0`} className="my-3 btn btn-warning fw-bold btn-rounded px-5 w-100">Add Rating</Link>
            </div>            
          </div>
          <div className="row gx-5 pt-md-4">
            <div className="col-lg-8 mb-sm-4">
              <div className="card px-5 py-4">
                <div className="row gx-0 single-review">
                  <div className="col-lg-12">
                    <div className="pb-4">
                      <span className="fw-semibold text-decoration-underline" >Detailed Reviews</span>
                    </div>
                  </div>
                  {(reviews?.reviews?.length > 0) ? reviews?.reviews?.map((elm, index) =>
                    <div className="col-lg-12" key={index}>
                      <div className="d-flex justify-content-start align-items-center py-2">
                        <div className="ratings">
                          {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (<i className={`bi ${index <= (parseInt(elm.rating)) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}></i>);
                          })}
                        </div>
                      </div>
                      <p className="">
                        {elm?.description}
                      </p>
                      <span className="text-muted">
                        {`Posted on: ${elm?.createdAt}`}
                      </span>
                      {(index + 1) !== reviews.reviews.length ?
                        <hr />
                        : null}
                    </div>
                  ) :
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-start align-items-center py-2">
                        <h4>No Reviews Available.</h4>
                      </div>
                    </div>
                  }
                </div>
                  <div className="text-center mt-5 d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className={`page-item ${pageNum == '' || pageNum === 0 ? 'disabled' : ''}`}>
                          <span className="page-link" onClick={(e) => {
                            pageNum !== 0 ? getReviews(-1) : e.preventDefault();
                          }}>Previous</span>
                        </li>
                        <li className={`page-item ${reviews?.hasMore ? '' : 'disabled'}`}>
                          <span className="page-link" onClick={(e) => {
                            reviews?.hasMore ? getReviews(1) : e.preventDefault();
                          }}>Next</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card add-rating-card p-0 text-center">
                <div className="px-4 pt-3 bg-opacity-10 bg-yellow">
                  <h2 className="h4">Add Your Rating</h2>
                  <p className="text-muted">Less than 2 min | 100% anonymus</p>
                </div>
                <div className="px-4 py-3 d-flex justify-content-start align-items-center">
                  <h2 className="h5">How was your payment experience
                    with <span className="fw-bold">{contractorDetails?.companyName}</span></h2>
                </div>
                <div className="px-10 ratings d-flex justify-content-between">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (<i className={`bi ${index <= (hover || rating) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}
                    onClick={() => {
                        setRating(index);
                        router.push(`/add-gc-profile-rating?id=${userId}&step=1&rating=${index}`)
                      }
                    }
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                    ></i>);
                  })}
                </div>
                <div className="px-10 d-flex justify-content-between">
                  <p className="small text-muted">Very bad</p>
                  <p className="small text-muted">Very good</p>
                </div>
                <div className="px-4">
                  <Link href={`/add-gc-profile-rating?id=${userId}&step=1&rating=${rating}`} className="my-3 btn btn-warning fw-bold btn-rounded px-5">Add Rating</Link>
                  <p className="small fw-normal">We will never share your name and number</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-opacity-10 bg-yellow py-lg-5 cta">
        <div className="container px-5 my-lg-5 pb-sm-5">
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
      <Footer />
    </>
  );
}

export default Constractorprofile;
