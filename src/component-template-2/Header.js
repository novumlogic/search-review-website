import '../css-template-2/Header.css';
import logo from '../assets/ProjectHero.svg';
import callIcon from '../assets/ph-call.svg';
function Header({ headerData }) {
  let count = 1;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-black">
        <div className="container px-5">
          <a className="navbar-brand" href="#!"><img className="img-fluid" src={logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex"><img className="nav-icon" src={callIcon} /><a className="nav-link"
                href="tel:+91-9151003537">+91-9151003537</a></li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">Review</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
