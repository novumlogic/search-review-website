// import whatsappImg from '../assets/whatsapp 1.svg';
import ReviewImg from '../assets/joel-filipe-RFDP7_80v5A-unsplash.jpg';
import mappinImg from '../assets/Map_Pin.svg';
import userImg from '../assets/User_01.svg';
import notFound from "../assets/no-contractor-found.svg";
import phoneImg from '../assets/Phone.svg';

import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Searchresult ({ contractorsList }) {
  const router = useRouter();
  const query = router.query.query ? router.query.query : '';
  const pNo = router.query.pageNumber ? Number(router.query.pageNumber) : '';
  const pSize = router.query.pageSize ? Number(router.query.pageSize) : '';
  const [searchValue, setSearchValue] = useState(query ? query : '');
  const [pageNum, setPageNum] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      setSearchValue(query);
      setPageNum(pNo);
      setPageSize(pSize);
      setLoading(false);
    }
  }, [router.isReady, router.asPath]);

  const handleSearch = async (page) => {
    router.push({
      pathname: '/search-result',
      query: {
        query: searchValue.trim(),
        pageNumber: page ? pageNum + page : pageNum,
        pageSize: pageSize
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
      <Header />
      <header className="bg-yellow py-10">
      </header>
      <section className="search-section">
        <div className="container px-lg-5 px-sm-4">
          <div className="row gx-5">
            <div className="col-lg-12">
              <p className="small mb-3">Reviews {'>'} <strong>Search</strong></p>
              <div className="card p-lg-5 p-sm-3">
                <div>
                  <h2 className="fw-bolder mb-2 text-center">Choose the right partner for your construction work</h2>
                  <p className="lead mb-4 text-center">Search contractors and find their reviews or add a review of contractors you’ve worked with! </p>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="d-grid gap-3 d-sm-flex px-lg-5 pt-3 search-container">
                    <div className="input-group input-group-lg mb-3">
                      <span className="input-group-text pe-md-1"><i className="bi bi-search"></i></span>
                      <input type="text" className="form-control ps-sm-1" placeholder="Search contractors by name" value={searchValue ? searchValue : (query && searchValue !== '') ? query : ''} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={(e) => handleEnter(e)}/>
                      {searchValue ?
                        <span className="input-group-text input-icon-r" onClick={() => {
                          router.replace({
                            pathname: '/search-result',
                            query:{
                              pageNumber: 0,
                              pageSize: 10
                            }
                          }); setSearchValue('');
                        }}><i className="bi bi-x"></i></span>
                        : null}
                      <button id="btn-search" className="btn btn-dark px-5" type="button" onClick={() => handleSearch()}>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {!contractorsList?.customers?.length > 0 && searchValue !== '' ?
        loading ?
          <section className="py-5">
            <div className="container px-5 mb-5">
              <div className="row gx-5">
                <div className="col-lg-12 mb-3 d-flex justify-content-center">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          :
          <section className="">
            <div className="container px-5 mb-5">
              <div className="row gx-5">
                <div className="col-lg-12 d-flex justify-content-center">
                  <Image src={notFound} alt="Contractor Not Found" className="img-fluid" width={150} />
                </div>
                <div className="col-lg-12 mb-3">
                  <h4 className="text-center mb-3">{`Sorry! We could not find any contractor for “${searchValue}”.`}</h4>
                  <h4 className="text-center">You can also add a profile for the contractor you’re looking for!</h4>
                </div>
                <div className="col-lg-4 offset-lg-4 mb-3 d-flex justify-content-center">
                  <Link href='/add-gc-profile-rating' className="mt-1 btn btn-warning fw-bold btn-rounded px-5">+ Add Profile</Link>
                </div>
              </div>
            </div>
          </section>
        :
        <section className="py-5">
          <div className="container px-lg-5 px-sm-3 mb-5">
            {query ?
              <p className="small mb-3">{`Showing ${contractorsList?.customers?.length} result for ${query}`}</p>
              : null}
            <div className="row gx-5 pt-4">
              {contractorsList?.customers?.map((elm, index) =>
                <div className="col-lg-12 mb-3 " key={index}>
                  <div className="card p-4">
                    <Link className="text-decoration-none" href={`/contractor-profile?id=${elm?.customerId}`}>
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-2">
                        <div className="feature feature-full position-relative rounded-3 overflow-hidden bs-4">
                          <Image src={elm?.profilePicture ? elm?.profilePicture : ReviewImg} alt='Review' className="img-fluid" width={100} height={100} />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <h2 className="h5">{elm?.companyName}</h2>
                        <div className="d-flex justify-content-start align-items-lg-center flex-lg-row flex-sm-column">
                          {elm?.city ? 
                          <div className="d-flex flex-row align-items-center me-lg-4">
                            <Image className="nav-icon me-1" alt='Mapping Image' src={mappinImg} />
                            <p className="m-0 fw-bold">{elm?.city}</p>
                          </div>
                          : null}
                          {elm?.designation ? 
                          <div className="d-flex flex-row align-items-center me-lg-4">
                            <Image className="nav-icon me-1" alt='User' src={userImg} />
                            <p className="m-0">{elm?.designation}</p>
                          </div>
                          : null}
                          {elm?.phoneNumber ? 
                          <div className="d-flex flex-row align-items-center me-lg-4">
                            <Image className="nav-icon me-1" alt='Phone' src={phoneImg} />
                            <p className="m-0">{`Phone: ${elm?.phoneNumber}`}</p>
                          </div>
                          : null}
                        </div>
                        <hr className="d-none d-sm-block d-md-none" />                         
                        <div className="d-flex justify-content-start align-items-center py-2 pt-lg-4">
                          <h5 className="m-0 small">Rating: {elm?.rating ? null : <span>No ratings yet</span> }</h5>
                          {elm?.rating ?
                          <div className="ratings mx-2">                            
                            {[...Array(5)].map((star, index) => {
                              index += 1;
                              return (<i className={`bi ${index <= (parseInt(elm?.rating)) ? 'bi-star-fill' : 'bi-star'} text-yellow`} key={index}></i>);
                            })}                          
                          </div>
                          : null}
                          {elm?.rating ?
                          <div className="d-flex align-items-center">
                            <span className="badge bg-success fw-bold">{elm?.rating ? elm?.rating : 0}</span>
                          </div>
                          : null}
                        </div>
                      </div>
                    </div>
                    <div className="row gx-0">
                      <div className="col-lg-2">
                      </div>
                      <div className="col-lg-10 col-sm-10">                                                
                        <div className="pt-3">
                          <Link className="text-center fw-semibold" href={`/contractor-profile?id=${elm?.customerId}`}>View Reviews</Link>
                        </div>
                      </div>
                    </div>
                    </Link>
                  </div>
                </div>
              )}
              <div className="text-center mt-5 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className={`page-item ${pageNum === 0 ? 'disabled' : ''}`}>
                      <span className="page-link" onClick={(e) => {
                        pageNum !== 0 ? handleSearch(-1) : e.preventDefault();
                      }}>Previous</span>
                    </li>
                    <li className={`page-item ${contractorsList?.hasMore ? '' : 'disabled'}`}>
                      <span className="page-link" onClick={(e) => {
                        contractorsList?.hasMore ? handleSearch(1) : e.preventDefault();
                      }}>Next</span>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </section>
      }
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

export default Searchresult;
