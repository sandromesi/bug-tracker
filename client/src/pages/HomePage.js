import React from 'react'
import IssuePage from './IssuePage';
import LoginPage from './LoginPage';

const HomePage = ({user}) => {

    return (
        <div>
            {user ? <IssuePage user={user} /> : <LoginPage />}   
        </div>
    );
};

export default HomePage;