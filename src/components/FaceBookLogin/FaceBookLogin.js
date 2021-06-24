// import React from 'react';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from '../LoginManager/firebase.config';
// firebase.initializeApp(firebaseConfig);
// const FaceBookLogin = () => {


//     const provider = new firebase.auth.FacebookAuthProvider();
//     const handleFb = () => {
//         firebase
//             .auth()
//             .signInWithPopup(provider)
//             .then((result) => {
//                 var user = result.user;
//                 console.log(user)
//             })
//             .catch((error) => {
//                 var errorMessage = error.message;
//                 console.log(errorMessage)
//             });

//     }
//     return (
//         <div>
//             <button onClick={handleFb}>FaceBook</button>
//         </div>
//     );
// };

// export default FaceBookLogin;