import React from 'react';
import Copyright from './Copyright';
import LOGO from './img/style/logo.png';
import { Link } from 'react-router-dom';
import PrivateData from './data/PrivateData';

export default function Footer() {
    return (
        <div className='bg-secondary p-2 pt-3'>
            <div className='row align-items-center justify-content-center mx-0'>
                <div className='col-md'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col'>
                            <div className='h1 mx-4'>
                                {/* <img src={LOGO} style={{ height: '70px' }} /> */}
                                Skillark
                            </div>
                        </div>
                        <div className='col text-center'>
                            {/* <a className='text-black'
                            href='#linkedin'>
                                <i class="h3 m-1 bi bi-facebook" />
                                </a> */}
                            <a className='text-black'
                                href={PrivateData.instagram}>
                                <i class="h3 m-2 bi bi-instagram" />
                            </a>
                            <a className='text-black'
                                href={PrivateData.linkedin}>
                                <i class="h3 m-2 bi bi-linkedin" />
                            </a>
                            <a className='text-black'
                                href={PrivateData.youtube}>
                                <i class="h1 m-2 bi bi-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='row justify-content-end mx-0'>
                        <div className='col-5'>
                            <div className='h3'>Company</div>
                            <Link to='/'><div className='h6 text-black'>
                                Home
                            </div></Link>
                            <Link to='/'><div className='h6 text-black'>
                                Live Trainings
                            </div></Link>
                            <Link to='/'><div className='h6 text-black'>
                                Career Counselling
                            </div></Link>
                        </div>
                        <div className='col-5'>
                            <div className='h3'>Support</div>
                            <Link to='/careers'><div className='h6 text-black'>
                                Career
                            </div></Link>
                            <Link to='/contactus'><div className='h6 text-black'>
                                Contact Us
                            </div></Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row align-items-center justify-content-center mx-0'>
                <div className='col text-center h5'>
                    Skillark Pvt. Ltd. 2022
                </div>
                <div className='col text-center h5'>
                    Terms & Conditions
                </div>
                <div className='col text-center h5'>
                    Privacy Policy
                </div>
            </div>
        </div>
    );
}
