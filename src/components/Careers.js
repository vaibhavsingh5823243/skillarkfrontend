import React from 'react';
import Navbar from './Navbar';
import CareersData from './data/CareersData';
import Footer from './Footer';

export default function Careers() {
    return (<>
        <Navbar />
        <div>
            <div className='row justify-content-center mx-0'>
                <div className='col-md-8 col-sm-10'>
                    {CareersData.data.map((items) => {
                        return (<div className='my-5 ska-box px-5 py-3'>
                            <div className='h1 my-3'>{items.option}</div>
                            {items.Careers.map((item) => {
                                return (<div className='mx-5'>
                                    <div className='h4'>{item.name}</div>
                                    <div className='h6'>{item.desc}</div>
                                    <hr className='fw-bolder text-ska-primary-dark' />
                                </div>)
                            })}
                        </div>)
                    })}
                </div>
            </div>
        </div>
        <Footer/>
    </>);
}
