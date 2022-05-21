import React, { useState } from 'react';
import '../css/signin.css'

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (e) => {
        try {



        } catch {

        }
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.detail) {
                alert(res.detail)
            }
                
            
        })
            .catch(err => console.error(err));
        redirect()
        
    }

    const redirect = () => {
        window.location.replace('/');
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please log in</h1>
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
                        onClick={login} >Log in</button>
                </form>
            </main>
        </>
    );
};

export default LoginPage;