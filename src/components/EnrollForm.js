import React, { useState } from 'react';
import Axios from "axios";
import Html from './Html';

export default function EnrollForm(props) {

    const [check, setCheck] = useState(false);
    const [html, setHtml] = useState("");
    const [name, setName] = useState("Machine Learning");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [amount, setAmount] = useState(`${props.price}`);

    const handleEnrollForm = event => {
        Axios.post("http://localhost:3000/payment/paynow", {
            name,email,phone,amount
        })
        .then(function (res) {
            setHtml(res.data);
            setCheck(true);
        });
        event.preventDefault();
    };
    return <div className='row justify-content-center mb-3'>
        {check && <Html data={html}/>}
        <div className='col-md-5 col-sm-8'>
            <div className='m-3 fw-bolder display-6 text-ska-primary'>
                 ₹.{amount}
            </div>
            <form onSubmit={handleEnrollForm} method='POST'>
                <div class="mb-3">
                    <input type="text" placeholder="Email address" value={email} autoFocus
                        class="form-control form-control border-ska-primary border-2"
                        onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div class="mb-3">
                    <input type="tel" class="form-control border-2 form-control border-ska-primary"
                        placeholder="phone"
                        value={phone} onChange={(event) => setphone(event.target.value)} required />
                </div>
                <div class="d-grid gap-2 col-4">
                    <button type="submit" class="btn btn-ska-primary-dark"
                    >Enroll Now</button>
                </div>
            </form>
        </div>
    </div>
}
