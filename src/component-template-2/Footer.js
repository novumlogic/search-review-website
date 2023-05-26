import facebookImg from '../assets/facebook.svg'
import linkedinImg from '../assets/linkedin.svg'
import youtubeImg from '../assets/youtube.svg'
import instagramImg from '../assets/instagram.svg'
import footerLogo from '../assets/ProjectHero.svg'
import playstoreImg from '../assets/playstore.svg'
import emailImg from '../assets/ph-email.svg'
import callImg from '../assets/ph-call.svg'


function Footer({ ourDetailsData }) {
  return (

    <footer class="pt-5 pb-4 bg-black">
      <div class="container px-5 mt-3">
        <div class="row gx-5 justify-content-center text-white">
          <div class="col-lg-7 col-xl-7">
            <div class="pe-5 py-3">
              <img class="img-fluid logo" src={footerLogo} />
              <h3 class="py-5">Your ProjectHeroes are Ready</h3>
              <div class="row">
                <div class="col-lg-4 col-xl-4 br-white">
                  <h5>Contractor App</h5>
                  <a href=""><img class="img-fluid" src={playstoreImg} /></a>
                </div>
                <div class="col-lg-4 col-xl-4">
                  <h5>Worker App</h5>
                  <a href=""><img class="img-fluid" src={playstoreImg} /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-5">
            <div class="pe-5 py-3">
              <h2>Have a question? Here to help.</h2>
              <p>Please feel free to reach out to our customer support from 9 AM - 6 PM on weekdays.</p>
              <div class="pt-5">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item d-flex mb-2"><img class="nav-icon me-3" src={emailImg}/><a class ="nav-link" href="mailto:marketing@projecthero.in">marketing @projecthero.in</a></li>
                  <li class="nav-item d-flex"><img class="nav-icon me-3" src={callImg}/><a class ="nav-link" href="tel:+91-9151003537">+91-9151003537</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row gx-5 text-white mt-5">
          <div class="col-lg-6 col-xl-6">
            <ul class="navbar-nav d-flex align-items-center flex-row">
              <li class="nav-item pe-3"><a class="nav-link" href="">Privacy Policy</a></li>
              <li class="nav-item pe-3"><a class="nav-link" href="">Contact Us</a></li>
              <li class="nav-item pe-3"><a class="nav-link" href="">Refund Policy</a></li>
              <li class="nav-item pe-3"><a class="nav-link" href="">Terms and Conditions</a></li>
            </ul>
          </div>
          <div class="col-lg-6 col-xl-6">
            <ul class="navbar-nav d-flex align-items-center flex-row-reverse pe-5">
              <li class="nav-item pe-3"><a class="nav-link" href=""><img class="img-fluid" src={facebookImg}/></a></li>
              <li class="nav-item pe-3"><a class="nav-link" href=""><img class="img-fluid" src={linkedinImg}/></a></li>
              <li class="nav-item pe-3"><a class="nav-link" href=""><img class="img-fluid" src={youtubeImg}/></a></li>
              <li class="nav-item pe-3"><a class="nav-link" href=""><img class="img-fluid" src={instagramImg}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
