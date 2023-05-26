// import '../css-template-2/Header.css';
import Image from 'next/image';
import logo from '../assets/ProjectHero.svg';
import callIcon from '../assets/ph-call.svg';
import Link from 'next/link';
import { useRouter } from "next/router";
function Header({ headerData }) {
  const router = useRouter();
  let count = 1;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-black">
        <div className="container px-5">
          <Link className="navbar-brand" href="/"><Image className="img-fluid" alt="Logo" src={logo} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center"><Image className="nav-icon" alt="Call Icon" src={callIcon} /><a className="nav-link"
                href="tel:+91-9151003537">+91-9151003537</a></li>
              <li className="nav-item"><Link className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page" href="/">Home</Link></li>
              <li className="nav-item">
                <Link className={router.pathname.startsWith ("/search-result") || router.pathname.startsWith ("/contractor-profile") || router.pathname.startsWith ("/add-gc-profile-rating") ? "nav-link active" : "nav-link"} 
                href={`/search-result?pageNumber=0&pageSize=10`}>Review</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
