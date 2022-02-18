import * as React from 'react';
import { Switch, Routes, Route } from 'react-router-dom';
// file
import bgimage from './img/style/bg.png';
import logoimage from './img/style/logo.png';
// component
import Copyright from './Copyright';
import Login from './Login';
import Register from './Register';

export default function Loginmodule(props) {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#e8fff7', minHeight: '100vh', }}>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-9 col-sm-10 d-none d-lg-block'
          style={{
            height: '100vh',
            backgroundImage: `url(${bgimage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 100%',
            borderTopRightRadius: '8%',
            borderBottomRightRadius: '8%',
          }}>
          <div className='py-4 glass'>
            <div className='row align-items-center'>
              <div className='col-5 ps-5'>
                <img src={logoimage} className='img-fluid' alt='logo'
                  style={{ height: '100px', marginBottom: '10%' }}/>
              </div>
              <div className='col-6'>
                <div className='h1 text-start fw-bold' style={{ color: '#333' }}>
                  Skillark</div>
              </div>
            </div>
            <div className='h2 text-start ms-5 mt-4 fw-bold'>Hey There, Welcome!</div>
            <div className='h6 text-start ms-5 my-3 text-success'>We are Skillark Technology</div>
            <div className='h4 fw-bolder mt-5 text-center m-3'>
              "Courage is going from failure to failure without losing enthusiasm."
            </div>
            <div className='h3 text-end me-5 fw-bold'>~someone</div>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div className=' d-block d-lg-none'>
            <div className='row align-items-center'>
              <div className='col-5 text-end'>
                <img src={logoimage} className='img-fluid'
                  style={{ height: '100px' }}></img>
              </div>
              <div className='col-7'>
                <div className='display-3 text-start fw-bold' style={{ color: '#444' }}>
                  Skillark</div>
              </div>
            </div>
          </div>

          {(props.id == '#login') ? <Login /> : <Register />}

          <Copyright />
        </div>
      </div>
    </div>
  );
}