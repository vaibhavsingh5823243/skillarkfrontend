import React, { useState, useEffect } from 'react';
import Notification from './Notification';

export default function Contactform(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [notifi, setNotifi] = useState(false);


    const handleMessage = (event) => {
        if (props.for == 'courseEnquiry') {
            setNotifi(true)
        } else {
            // setNotifi(!notifi)
        }
        event.preventDefault();
    }
    return (
        <>{notifi && <Notification message='We got ur Message' />}
            <form onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-md m-2">
                        <input type="text" placeholder="First name" aria-label="First name"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={fname} onChange={(event) => setFname(event.target.value)} required/>
                    </div>
                    <div className="col-md m-2">
                        <input type="text" placeholder="Last name" aria-label="Last name"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={lname} onChange={(event) => setLname(event.target.value)} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md m-2">
                        <input type="email" placeholder="Email" aria-label="Email"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </div>
                    <div className="col-md m-2">
                        <input type="tel" type="tel" pattern="[5-9]{1}[0-9]{9}" placeholder="Phone" aria-label="Phone"
                            className="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={phone} onChange={(event) => setPhone(event.target.value)} required />
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md m-2">
                        <textarea class="form-control border-ska-primary-dark border-2 border-0 border-bottom"
                            value={message} onChange={(event) => setMessage(event.target.value)} required
                            placeholder="Message...." rows="2">
                        </textarea>
                    </div>
                </div>
                <button type="submit" class="m-4 px-5 btn btn-ska-primary-dark ">Send Message</button>
            </form>
        </>
    );
}
