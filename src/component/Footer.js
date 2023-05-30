import facebookImg from '../assets/facebook.svg'
import linkedinImg from '../assets/linkedin.svg'
import youtubeImg from '../assets/youtube.svg'
import instagramImg from '../assets/instagram.svg'
import footerLogo from '../assets/ProjectHero.svg'
import playstoreImg from '../assets/playstore.svg'
import emailImg from '../assets/ph-email.svg'
import callImg from '../assets/ph-call.svg'
import Image from 'next/image';


function Footer({ ourDetailsData }) {
  return (

    <footer className="pt-5 pb-4 bg-black">
      <div className="container px-5 mt-3">
        <div className="row gx-5 justify-content-center text-white">
          <div className="col-lg-7 col-xl-7">
            <div className="pe-5 py-3">
              <Image priority={false} unoptimized={true} className="img-fluid logo w-auto h-auto" alt="Footer Logo" src={footerLogo} />
              <h3 className="py-5">Your ProjectHeroes are Ready</h3>
              <div className="row">
                <div className="col-lg-4 col-xl-4 br-white">
                  <h5>Contractor App</h5>
                  <a href="https://play.google.com/store/apps/details?id=com.projecthero.contractor&hl=en-IN&utm_source=website&utm_medium=website&utm_campaign=website_app_install&utm_content=app_install&utm_term=app_install" target="_blank"><Image priority={false} unoptimized={true} className="img-fluid w-100" alt="Playstore Image" src={playstoreImg} /></a>
                </div>
                <div className="col-lg-4 col-xl-4">
                  <h5>Worker App</h5>
                  <a href="https://play.google.com/store/apps/details?id=com.projecthero.android&hl=en-IN&utm_source=website&utm_medium=website&utm_campaign=website_app_install&utm_content=app_install&utm_term=app_install" target="_blank"><Image priority={false} unoptimized={true} className="img-fluid w-100" alt="Playstore Image" src={playstoreImg} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-5">
            <div className="pe-5 py-3">
              <h2>Have a question? Here to help.</h2>
              <p>Please feel free to reach out to our customer support from 9 AM - 6 PM on weekdays.</p>
              <div className="pt-5">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item d-flex mb-2"><Image priority={false} unoptimized={true} className="nav-icon me-3" alt="email Icon" src={emailImg}/><a className="nav-link" href="mailto:marketing@projecthero.in">marketing @projecthero.in</a></li>
                  <li className="nav-item d-flex"><Image priority={false} unoptimized={true} className="nav-icon me-3" alt="Call Icon" src={callImg}/><a className="nav-link" href="tel:+91-9151003537">+91-9151003537</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-5 text-white mt-5">
          <div className="col-lg-6 col-xl-6">
            <ul className="navbar-nav d-flex align-items-center flex-row">
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="http://projecthero.in/privacy-policy">Privacy Policy</a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="http://projecthero.in/contact-us">Contact Us</a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="http://projecthero.in/refund-policy">Refund Policy</a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="http://projecthero.in/tnc">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-lg-6 col-xl-6">
            <ul className="navbar-nav d-flex align-items-center flex-row-reverse pe-5">
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="https://www.instagram.com/projectheroworkers/?hl=en"><Image priority={false} unoptimized={true} className="img-fluid" alt="..." src={facebookImg}/></a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="https://www.youtube.com/@ProjectHeroconstruction1021"><Image priority={false} unoptimized={true} className="img-fluid" alt="..." src={linkedinImg}/></a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="https://www.linkedin.com/company/ProjectHeroes/"><Image priority={false} unoptimized={true} className="img-fluid" alt="..." src={youtubeImg}/></a></li>
              <li className="nav-item pe-3"><a className="nav-link" target="_blank" href="https://www.facebook.com/ondemandlabour"><Image priority={false} unoptimized={true} className="img-fluid" alt="..." src={instagramImg}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
