import './App.css';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn'
import FormInput from './components/FormInput/FormInput';
import FaceBookLogin from './components/FaceBookLogin/FaceBookLogin';
import GitHub from './components/GitHub/GitHub';


function App() {
  return (
    <div>
      {/* <GoogleSignIn></GoogleSignIn> */}
      {/* <FormInput></FormInput> */}
      {/* <FaceBookLogin></FaceBookLogin> */}
      <GitHub></GitHub>
    </div>
  );
}

export default App;
