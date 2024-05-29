import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery'; 
import Member from './pages/Member/Member';
import Career from './pages/Career/Career';
import Contact from './pages/Contact/Contact';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import logo from './utils/images/logo.jpg';
import Seminar from './pages/components/Events/Seminar';
import Leadership from './pages/components/Events/Leadership';
import HelpFund from './pages/components/Events/HelpFund';
import FifthReunion from './pages/components/Events/FifthReunion';
import IftarParty from './pages/components/Events/IftarParty';
import FourthReunion from './pages/components/Events/FourthReunion';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
            <img src={logo} alt="" />
            
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link as={Link} to='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link as={Link} to='/news' className='text-uppercase'>News & Events</Nav.Link>
              <Nav.Link as={Link} to='/about' className='text-uppercase'>About us</Nav.Link>
              <Nav.Link as={Link} to='/gallery' className='text-uppercase'>Gallery</Nav.Link>
              <Nav.Link as={Link} to='/member' className='text-uppercase'>Member Directory</Nav.Link>
              <Nav.Link as={Link} to='/career' className='text-uppercase'>Career Opportunity</Nav.Link>
              <Nav.Link as={Link} to='/contact' className='text-uppercase'>Contact Us</Nav.Link>
              <Nav.Link as={Link} to='/registration' className='text-uppercase'>Registration/Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/member' element={<Member />} />
        <Route path='/career' element={<Career />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/seminar' element={<Seminar />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/helpfund' element={<HelpFund />} />
        <Route path='/fifthreunion' element={<FifthReunion />} />
        <Route path='/iftarparty' element={<IftarParty />} />
        <Route path='/fourthreunion' element={<FourthReunion />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type='button' className='btn  btn-lg mb-5 mb-md-4 text-uppercase fw-semibold btn-custom-blue'>Contact Us</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="https://www.facebook.com/groups/CSEJU.ALUMNI">
                  <li>
                    <a href="https://www.facebook.com/groups/CSEJU.ALUMNI"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0b69b0" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg></a>
                  </li>
                </Link>
                <Link to="https://jucsealumni.org/home">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0b69b0" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>
                  </li>
                </Link>
                
                <Link to="mailto:office.cse@juniv.edu">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0b69b0" class="bi bi-mailbox" viewBox="0 0 16 16">
  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3m0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m2.646 1A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3z"/>
  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0"/>
</svg>
                  </li>
                </Link>
                <Link to="https://www.youtube.com/watch?v=QT2voPSg0Rc">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ac4444" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none '>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/gallery" className='text-decoration-none '>
                      <li className='text-uppercase fw-semibold'>Gallery</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none '>
                      <li className='text-uppercase fw-semibold'>About us</li>
                    </Link>
                    <Link to="/member" className='text-decoration-none '>
                      <li className='text-uppercase fw-semibold'>Member Directory</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none '>
                      <li className='text-uppercase fw-semibold'>Contact Us</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Address - <a href="https://www.google.com/maps/place/V7G8%2BXFM,+Savar/data=!4m2!3m1!1s0x3755ebd3d6df9569:0x3acabd31f1b5a92?sa=X&ved=1t:242&ictx=111"> Department of Computer Science and Engineering, Jahangirnagar University, Savar, Dhaka </a></p>
                    </li>
                    <li>
                      <p>Phone Number - <a href="tel:+880222449104551">02224491045-51</a></p>
                    </li>
                    <li>
                      <p>Email - <a href="mailto:office.cse@juniv.edu">office.cse@juniv.edu</a></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-body-tertiary'>
          <div className='container'>
            <p className='p-3 m-0 text-center'>copyright @ team SIC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
