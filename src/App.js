import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Footer from './component-template-2/Footer';
import Header from './component-template-2/Header';
import Home from './component-template-2/Home';
import Contractor from './component-template-2/Contractor';
import CTA from './component-template-2/CTA';
import Review from './component-template-2/Review';
import PHTrust from './component-template-2/PHTrust';
import JsonData from "./jsondata/data.json";
import "react-multi-carousel/lib/styles.css";
import { Helmet } from "react-helmet";
import Question from './component-template-2/Question';
import ProfileRating from './component-template-2/ProfileRating';
import Constractorprofile from './component-template-2/Constractorprofile';
import Searchresult from './component-template-2/Searchresult';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

  }, []);
  return (
    <>
      {landingPageData.seoData &&


        landingPageData.seoData.map(headdata =>
          
          <Helmet>
            <title>{headdata.title}</title>
            <meta name="description" content={headdata.description} />
            <link rel="canonical" href={headdata.canonicalUrl} />
            <meta property="og:title" content={headdata.openGraph.title} />
            <meta property="og:description" content={headdata.openGraph.description} />
            <meta property="og:image" content={headdata.openGraph.image} />
            <meta property="og:url" content={headdata.openGraph.url} />
            <meta property="og:type" content={headdata.openGraph.type} />
            <meta name="twitter:card" content={headdata.twitter.card} />
            <meta name="twitter:title" content={headdata.twitter.title} />
            <meta name="twitter:description" content={headdata.twitter.description} />
            <meta name="twitter:image" content={headdata.twitter.image} />

            {
              headdata.alternateUrls.map(alturl => {
                <>
                  <link rel="alternate" hreflang={alturl.hreflang} href={alturl.href} />
                </>
              })
            }


            <meta name="robots" content={headdata.robots} />
            <link rel="icon" type="image/png" href={headdata.faviconUrl} />
          </Helmet>

        )
      }
      {landingPageData.viewData?.header &&
        <Header headerData={landingPageData.viewData.header} />
      }
 
         {landingPageData.viewData?.home &&
        <ProfileRating contractorData={landingPageData.viewData.home} />
      }
        {landingPageData.viewData?.home &&
        <Constractorprofile contractorData={landingPageData.viewData.home} />
      }
        {landingPageData.viewData?.home &&
        <Searchresult contractorData={landingPageData.viewData.home} />
      }
        {landingPageData.viewData?.home &&
        <Footer contractorData={landingPageData.viewData.home} />
      }
       

       {/* <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={[<Home homeData={landingPageData.viewData.home} />,
                <Contractor contractorData={landingPageData.viewData.home} />,
                <CTA contractorData={landingPageData.viewData.home} />,
                <Review contractorData={landingPageData.viewData.home} />,
                <PHTrust contractorData={landingPageData.viewData.home} />,
                <Question contractorData={landingPageData.viewData.home} />
                ]}></Route>
                 <Route exact path='/about' element={< ProfileRating />}></Route>
                 <Route exact path='/contact' element={< Review />}></Route>
          </Routes>
          </div>
       </Router> */}


      {/* {landingPageData.viewData?.howWeWork &&
        <Howwework howWeWorkData={landingPageData.viewData.howWeWork} />
      }
      {landingPageData.viewData?.whyChooseUs &&
        <Whychooseus whyChooseUsData={landingPageData.viewData.whyChooseUs} />
      }
      {landingPageData.viewData?.specializations &&
        <Specialization specializationData={landingPageData.viewData.specializations} />
      }
         {landingPageData.viewData?.portfolio &&
            <PortFolio portfolioData={landingPageData.viewData.portfolio} />
          }
      {landingPageData.viewData?.OurTeam &&
        <Team ourTeamData={landingPageData.viewData.OurTeam} />
      }
      {landingPageData.viewData?.portfolio &&
        <Award awardData={landingPageData.viewData.portfolio.awards} />
      }
       {landingPageData.viewData?.metrics &&
            <Count countData={[landingPageData.viewData.metrics]} />
          }
      {landingPageData.viewData?.ourDetails &&
        <Contactus contactData={[landingPageData.viewData.ourDetails]} />
      }
      {landingPageData.viewData?.testimonials &&
        <Testimonial testimonialData={landingPageData.viewData.testimonials} />
      }
       {landingPageData.viewData?.getInTouch &&
            <GetIntouch getInTouchData={[landingPageData.viewData.getInTouch.form]} />
          }
      {landingPageData.viewData?.ourDetails &&
        <Footer ourDetailsData={[[landingPageData.viewData.ourDetails], [landingPageData.viewData.footer], [landingPageData.viewData.callToAction]]} />
      } */}

    </>
  );
}

export default App;
