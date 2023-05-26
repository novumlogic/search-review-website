import constRating from '../../public/assets/joel-filipe-RFDP7_80v5A-unsplash.jpg';


function Contractor({ awardData }) {

  return (
    <section className="py-5 popular-contractors">
        <div className="container px-5 my-5">
            <div className="text-center mb-5">
                <h3 className="fw-bold decorated"><span>Popular Contractors on ProjectHero</span></h3>
            </div>
            <div className="row gx-5 pt-4">
                <div className="col-lg-4 mb-5 mb-lg-0 ">
                    <div className="card">
                        <div className="p-4">
                            <div className="d-flex align-items-sm-center flex-column">
                                <div className="feature position-relative rounded-circle overflow-hidden bs-4 mb-3">
                                    <img src={constRating} className="img-fluid img-contractor" />
                                </div>
                                <h2 className="h4">Ashoke Buildscape</h2>
                                <p className="text-black text-opacity-75 text-light mb-0">Pune, Maharashtra | General
                                    Contractor</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-evenly">
                                <div className="ratings">
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star text-yellow"></i>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-success fw-bold">4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="g-0">
                            <button type="button" className="btn btn-warning fw-bold p-3">View Contractor</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0 ">
                    <div className="card">
                        <div className="p-4">
                            <div className="d-flex align-items-sm-center flex-column">
                                <div className="feature position-relative rounded-circle overflow-hidden bs-4 mb-3">
                                    <img src={constRating} className="img-fluid img-contractor"/>
                                </div>
                                <h2 className="h4">Ashoke Buildscape</h2>
                                <p className="text-black text-opacity-75 text-light mb-0">Pune, Maharashtra | General
                                    Contractor</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-evenly">
                                <div className="ratings">
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star text-yellow"></i>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-success fw-bold">4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="g-0">
                            <button type="button" className="btn btn-warning fw-bold p-3">View Contractor</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0 ">
                    <div className="card">
                        <div className="p-4">
                            <div className="d-flex align-items-sm-center flex-column">
                                <div className="feature position-relative rounded-circle overflow-hidden bs-4 mb-3">
                                    <img src={constRating} className="img-fluid img-contractor"/>
                                </div>
                                <h2 className="h4">Ashoke Buildscape</h2>
                                <p className="text-black text-opacity-75 text-light mb-0">Pune, Maharashtra | General
                                    Contractor</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-evenly">
                                <div className="ratings">
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star-fill text-yellow"></i>
                                    <i className="bi bi-star text-yellow"></i>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="badge bg-success fw-bold">4.5</span>
                                </div>
                            </div>
                        </div>
                        <div className="g-0">
                            <button type="button" className="btn btn-warning fw-bold p-3">View Contractor</button>
                        </div>
                    </div>
                </div>
                <a className="text-center mt-5 fw-semibold" href="#!">View All Contractors <i
                        className="bi bi-chevron-right"></i></a>
            </div>
        </div>
    </section>
  );
}

export default Contractor;
