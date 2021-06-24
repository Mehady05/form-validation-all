import React from "react";
import "./FormInput.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../LoginManager/firebase.config";
import { useState } from "react";
firebase.initializeApp(firebaseConfig);

const FormInput = () => {

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
        photo: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    // input value validation 
    const handleChange = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /^\S+@\S+\.\S+$/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            console.log(user.email, user.password);
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name)

                })
                .catch((error) => {
                    console.log(error.message);
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);

                })
                .catch((error) => {
                    console.log(error.message);
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault();
    }


    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className="formItems">
            <div className="container">
                <div className="row d-flex justify-content-center bg-success p-3">
                    <div className="col-md-6">
                        <div>
                            Name:{user.name} <br />
                            Email:{user.email} <br />
                            Password:{user.password} <br />
                        </div>
                        <input type="checkbox" onClick={() => setNewUser(!newUser)} name="" id="" />
                        <label htmlFor="">New User Sign Up</label>
                        <form onSubmit={handleSubmit}>
                            {newUser && <label
                                className="form-control"
                                for="exampleFormControlTextarea1"
                                class="form-label"
                            >
                                Your Name
                            </label>}
                            {newUser && <input
                                className="form-control"
                                type="text"
                                name="name"
                                onBlur={handleChange}
                                id=""
                                required
                            />}
                            <br />
                            <label
                                className="form-control"
                                for="exampleFormControlInput1"
                                class="form-label"
                            >
                                Email address
                            </label>{" "}
                            <br />
                            <input
                                className="form-control"
                                type="email"
                                onBlur={handleChange}
                                name="email"
                                id=""
                                required
                                placeholder="Email"
                            />
                            <br />
                            <label
                                className="form-control"
                                for="exampleFormControlInput1"
                                class="form-label"
                            >
                                PassWord Here
                            </label>{" "}
                            <br />
                            <input
                                className="form-control"
                                type="password"
                                onBlur={handleChange}
                                name="password"
                                id=""
                                required
                                placeholder="Password"
                            />
                            <br />
                            <input className="form-control" type="submit" value={newUser? "Sign Up": "Sign In"} />
                        </form>
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>user {newUser ? "created" : "logged In"} successfully</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormInput;
