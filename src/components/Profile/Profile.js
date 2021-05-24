import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
    const currentUser = useSelector((state) => state.auth.user);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }


    return (
        <div className="container">
            <header className="jumbotron">
               <p><strong>Email:</strong> {currentUser.email}</p>
               <p> <strong>Username:</strong> {currentUser.username}</p>
                <p><strong>Joined: </strong> {currentUser.date_joined}</p>
            </header>
        </div>
    );
};

export default Profile