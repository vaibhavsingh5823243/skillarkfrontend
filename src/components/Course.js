import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import EnrollForm from './EnrollForm';

export default function Course(props) {

  const [formState, setformState] = useState(false);

  const goToEnrollForm = () => {
    setformState(true)
  }
  return (
    <>
      <Navbar />
      <div>
        {/* form */}
        {formState && <EnrollForm price={props.data.price} name={props.data.name}/>}
        
        <div className='course-section'>
          <div className='row align-items-center justify-content-center mx-0'>
            <div className='col-md-5 col-sm-10 order-md-5 course-box'>
              <img className='course-box-thumbnail' src={props.data.img} />
            </div>
            <div className='col-md-7 col-sm-10  order-md-1'>
              <div className=" mx-5 my-3 p-4">
                <h1 className='text-ska-primary'>{props.data.name}</h1>
                <p>{props.data.desc}</p>
                <h4>Price: ₹.{props.data.price}</h4>
                <div class="btn btn-ska-primary-dark"
                  onClick={() => goToEnrollForm()}
                >Enroll Now</div>
              </div>
            </div>
          </div>
        </div>


        <div className='row justify-content-center mx-0'>
          <div className='col-lg-4 col-sm-10 order-lg-5'>
            <div className='mb-5 ska-box p-3'>
              {/* <div className='h1 my-3 ms-4'>₹. {props.data.price}</div>
              <div class="d-grid gap-2 col-10 my-4 mx-auto ">
                <button class="btn btn-ska-primary-dark"
                >Enroll Now</button>
              </div> */}
              <div className='h3 m-3 text-ska-primary-dark'>Timing</div>
              {/* Course Features */}
              <div className='h3 m-3 text-ska-primary-dark'>Course Features</div>
              {props.data.features.map((item) => {
                return (<div className='mx-4 my-2 '>
                  <div className='row'>
                    <div className='col-1'>
                      <i class="bi bi-check-circle-fill" />
                    </div>
                    <div className='col-11'><div className='h6'> {item}</div></div>
                  </div>
                </div>)
              })}
            </div>
          </div>
          <div className='col-lg-6 col-sm-10  order-lg-1'>
            {props.data.Lists.map((items) => {
              return (<div className='mb-5 ska-box px-5 py-3'>
                <div className='h3 my-3 text-ska-primary-dark'>{items.name}</div>
                {items.list.map((item) => {
                  return (<div className='mx-4'>
                    <div className='h6 my-2 p-2 border-bottom border-white'>
                      <i class="bi bi-star-fill" />  {item}</div>
                  </div>)
                })}
              </div>)
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}