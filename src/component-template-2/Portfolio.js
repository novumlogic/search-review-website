import '../css-template-2/Portfolio.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function PortFolio({ portfolioData }) {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [portData, setData] = React.useState([]);
  let count = 1;
  function openModal() {
    setIsOpen(true);
  }
  function passDataFromModal(siteData) {
    setData(siteData)
    openModal()

  }

  function closeModal() {
    setIsOpen(false);
  }
  let siteImgBool = true;
  return (

    <section className="py-5 border-bottom portfolio-section" id="portfolio-sites">
      <div className="container px-5 my-5">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="row">
            <div className="col-md-12 mb-2">
              <h3>Site Details</h3>
            </div>
            <div className="col-md-6">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {portData.map(pf =>
                    <>
                      {pf.sitePhotos.map(siteimg => {
                        if (count == 1) {
                          count++;
                          return <>
                            <div className="carousel-item active">
                              <img src={siteimg} className="d-block img-fluid w-100" alt="..." />
                            </div>
                          </>

                        }
                        else {
                          return <>
                            <div className="carousel-item">
                              <img src={siteimg} className="d-block img-fluid" alt="..." />
                            </div>
                          </>
                        }
                      }

                      )}
                    </>
                  )}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex  flex-column justify-content-center">

              {portData.map(pf =>
                <>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Client Name</h5>
                      </div>
                      <p className="mb-1">{pf.clientName}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Site Location</h5>
                      </div>
                      <p className="mb-1">{pf.siteLocation}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Project Size</h5>
                      </div>
                      <p className="mb-1">{pf.projectSize}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Year Of Completion</h5>
                      </div>
                      <p className="mb-1">{pf.yearOfCompletion}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Description</h5>
                      </div>
                      <p className="mb-1">{pf.brief}</p>
                    </a>
                  </div>

                </>
              )}
            </div>
            <div className="col-md-12 col-12 mt-3 mb-3 text-right">
              <button className="btn btn-dark" onClick={closeModal}>Close</button>
            </div>
          </div>


        </Modal>
        <div className="row">
          <div className="mb-5">
            <h2 className="fw-bolder display-3 text-uppercase">Potrfolio Sites</h2>
          </div>
        </div>
        <div className="row">
          {portfolioData.sites.map(portfolio =>
            <>
              <div className="col-md-4  p-4">
                <img src={portfolio.sitePhotos[0]} onClick={() => passDataFromModal([portfolio])} className="img-fluid " alt="logo" />
              </div>

            </>
          )}

        </div>
      </div>

    </section >
  );
}

export default PortFolio;
