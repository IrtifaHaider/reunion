import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import backgroundImage from '../../utils/images/b1.jpg';

function Home() {
  return (
    <div className='home-page'>
      <header className='header' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='overlay'>
          <div className='container d-flex flex-column align-items-center'>
            <h1>Welcome To</h1>
            <h1 className='text-center'>The Website of Alumni, CSE, Jahangirnagar University</h1>
            <div className='alumni-info-box'>
              <h2>Alumni Reunion</h2>
              <h3>May 29–June 2, 2024</h3>
              <p>
                Excitement is building for the alumni event of the year. Given the current situation on campus, a few Reunion events have changed. But there's still lots to do—online lectures, new grad events, and other ways to reconnect.
              </p>
              <Link to="/registration">
                <button type='button' className='btn btn-primary'>Register now</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Home;
