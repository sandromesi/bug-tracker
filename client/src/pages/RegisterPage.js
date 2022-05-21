import React, { useState } from 'react';
import '../css/signin.css'

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: firstName + ' ' + lastName,
                email: email,
                password: password
            })
        })
            .catch(err => console.error(err));
        redirect()
    }

    const redirect = () => {
        window.location.replace('/login');
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                            required
                            onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput"
                            required
                            onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control"
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control"
                            required
                            onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit"
                        onClick={register} >Submit</button>
                </form>
            </main>
        </>
    );
};

export default RegisterPage;