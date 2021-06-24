import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LoginManager/firebase.config';

firebase.initializeApp(firebaseConfig);

const GitHub = () => {
    var provider = new firebase.auth.GithubAuthProvider();

    const handleGitHub = () => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = credential.accessToken;

                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }
    return (
        <div>

            <button onClick={handleGitHub}>GitHub Sign In</button>
        </div>
    );
};

export default GitHub;