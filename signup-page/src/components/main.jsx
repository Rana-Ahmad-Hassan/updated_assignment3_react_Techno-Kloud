import React, { useState } from 'react';

export default function Main() {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userContact, setContact] = useState("");
    const [showData, setShowData] = useState(false);

    function renderName(e) {
        setName(e.target.value);
    }

    function renderEmail(e) {
        setEmail(e.target.value);
    }

    function renderPassword(e) {
        setPassword(e.target.value);
    }

    function renderContact(e) {
        setContact(e.target.value);
    }

    function LoginClick() {
        storeDataInLocalStorage();
        setShowData(true);
        clearInputFields();
    }

    function clearInputFields() {
        setName("");
        setEmail("");
        setPassword("");
        setContact("");
    }

    function storeDataInLocalStorage() {
        localStorage.setItem("Name", userName);
        localStorage.setItem("Email", userEmail);
        localStorage.setItem("Password", userPassword);
        localStorage.setItem("Contact", userContact);
    }

    return (
        <>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-sm-12  mt-5 pt-md-5 shadow-lg p-3 col-mx-3" style={{ borderRadius: '20px' }}>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={userName}
                                    onChange={renderName}
                                    className="form-control p-3 fs-6"
                                    placeholder="Enter Your Name"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    value={userEmail}
                                    onChange={renderEmail}
                                    className="form-control p-3 fs-6"
                                    placeholder="Email address or phone number"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    value={userPassword}
                                    onChange={renderPassword}
                                    placeholder="Password"
                                    className="form-control p-3"
                                    id="password"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={userContact}
                                    onChange={renderContact}
                                    placeholder="Contact"
                                    className="form-control p-3"
                                    id="contact"
                                />
                            </div>
                            <button
                                className="btn btn-primary w-100 p-1 fw-bold fs-4"
                                onClick={LoginClick}
                                id='login'
                                type="button"
                            >
                                Log in
                            </button>
                            <hr />
                            <div className="container d-flex justify-content-center">
                                <button className="btn text-white p-2 fs-5 mt-2" style={{ backgroundColor: '#42B72A' }}>
                                    Create new account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {showData && (
                <div className="container">
                    <div className="row d-flex justify-content-center mt-5">
                        <ul className="list-group col-md-8 list-group-flush fs-4">
                            <li className="list-group-item text-primary">Name: {localStorage.getItem("Name")}</li>
                            <li className="list-group-item text-primary">Email: {localStorage.getItem("Email")}</li>
                            <li className="list-group-item text-primary">Password: {localStorage.getItem("Password")}</li>
                            <li className="list-group-item text-primary">Contact NO: {localStorage.getItem("Contact")}</li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}



