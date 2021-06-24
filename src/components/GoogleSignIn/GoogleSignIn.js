// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "../LoginManager/firebase.config";


// firebase.initializeApp(firebaseConfig);

// const GoogleSignIn = () => {
//   const [user, setUser] = useState({
//     isSignIn: false,
//     name: "",
//     email: "",
//     photo: "",
//   });
  
//   const googleSignIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         var user = result.user;
//         console.log(user);
//         const { displayName, email, photoURL } = user;
//         const signInUSer = {
//           isSignIn: true,
//           name: displayName,
//           email: email,
//           photo: photoURL,
//         };
//         setUser(signInUSer);
//         // ...
//       })
//       .catch((error) => {
//         var errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };

//   const googleSignOut = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         const signOutUser = {
//           isSignIn: false,
//           name: "",
//           email: "",
//           photo: "",
//         };
//         setUser(signOutUser);
//       })
//       .catch((error) => {
//         console.log(error)
//       });
//   };
//   return (
//     <div className='text-center'>
//       {user.isSignIn ? (
//         <button onClick={googleSignOut}>Sign Out</button>
//       ) : (
//         <button onClick={googleSignIn}>Sign In</button>
//       )}

//       {user.isSignIn && <div>
//           <p>Name:{user.name}</p>
//           <p>Email:{user.email}</p>
//           <img src={user.photo} alt="" />
//       </div>}
//     </div>
//   );
// };

// export default GoogleSignIn;
