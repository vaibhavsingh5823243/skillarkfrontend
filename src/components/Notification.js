import React from 'react';
import logo from './img/style/logo.png'
import * as bootstrap from "bootstrap";

export default function Notification(props) {
    var option = {
        animation: true,
        autohide: true,
        delay: 10000,
    };
    // set defaulttime
    let timing;
    props.time == null ? (timing = 'just now') : (timing = props.time)
    // add toast
    function toastAdd() {
        var toastLive = document.querySelectorAll('#liveToast');
        toastLive.forEach(function (value, index) {
            var toast = new bootstrap.Toast(toastLive[index], option);
            toast.show();
        })
    }
    setTimeout(toastAdd, 500);

    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: '10' }}>
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header bg-ska-primary-light">
                    <img src={logo} className="rounded me-2" alt="logo" style={{ height: '25px' }} />
                    <strong className="me-auto">Skillark</strong>
                    <small>{timing}</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body bg-ska-primary-light">{props.message}</div>
            </div>
        </div>
    );
}
