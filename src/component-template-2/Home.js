import '../css-template-2/Home.css';
import homeImg1 from '../../public/assets/Ellipse 389.png';
import homeImg2 from '../../public/assets/engineer-uniform-holding-white-helmet__2.png';
function Home() {

  return (
    // <!-- Header-->
    <header class="bg-yellow py-10">
      <div class="container px-5">
        <div class="row gx-5">
          <div class="col-lg-8">
            <div class="my-5">
              <h2 class="fw-bolder mb-2">Choose the right partner for your <br />construction work</h2>
              <p class="lead mb-4">Search Contractors | View Reviews | Add Ratings </p>
              <div class="d-grid gap-3 d-sm-flex">
                <div class="input-group input-group-lg mb-3">
                  <span class="input-group-text pe-1"><i class="bi bi-search"></i></span>
                  <input type="text" class="form-control" value="Sobha"
                    placeholder="Search General Contractor by Name or Phone Number" />
                  <button class="btn btn-dark px-5" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-bgs">
        <img class="img-fluid img-eclipse" src={homeImg1} />
        <img class="img-fluid img-character" src={homeImg2} />
      </div>
    </header>
  );
}

export default Home;
