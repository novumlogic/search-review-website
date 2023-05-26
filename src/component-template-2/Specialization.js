import special from '../img-tamplate-2/assets-temp-2/special.webp';
import Header from './Header';
function Specialization({ specializationData }) {
  return (
    // < !--Specialization section-- >
    <section className="bg-light py-5 border-bottom" id="specialization">
      <div className="container px-5 my-5">
        <div className="mb-5">
          <h2 className="fw-bolder display-3 bg-primary px-5 py-4 d-inline">Specialization</h2>
        </div>
        <div className="row gx-5 justify-content-center">
          {/* <!-- Image--> */}
          <div className="col-lg-12 col-xl-12">
            <img src={special} className="img-fluid" alt="specialization" />
          </div>
          {/* <!-- Specialization card--> */}
          <div className="row specialization-box-container">
            {specializationData.map(specialization =>
              <>
                <div className="col-lg-3 col-xl-3 ">
                  <div className="card bg-primary h-100">
                    <div className="card-body p-5">
                      <h4 className=" text-center">{specialization.title}</h4>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default Specialization;
