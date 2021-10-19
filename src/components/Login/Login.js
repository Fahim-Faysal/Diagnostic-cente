import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {

      let history = useHistory()
      let location = useLocation()

      const redirect_uri = location?.state?.from || '/home';

      const { GoogleSignIn } = useAuth()
      const auth = getAuth();

      const handeGoogleLogIn = () => {
            GoogleSignIn()
                  .then(result => {
                        history.push(redirect_uri)
                  })
                  .catch(error => {
                        setError(error.messeage)
                  })
      }


      const [euser, setEuser] = useState({})
      const [error, setError] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const emailValue = (e) => {

            setEmail(e.target.value)
      }

      const passwordValue = (e) => {
            setPassword(e.target.value)
      }


      const hendelRegistation = (e) => {
            e.preventDefault()

            signInWithEmailAndPassword(auth, email, password)
                  .then(result => {
                        console.log(result.user);
                        setEuser(result.user)
                        setError('')
                  })
                  .catch(error => {
                        setError('User not Found')
                  })
      }
      return (
            <div className='mx-auto w-25 mt-5'>
                  <h1 className='text-success'>Please Login</h1>
                  <form onSubmit={hendelRegistation}>
                        <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Email address</label>
                              <input onBlur={emailValue} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label">Password</label>
                              <input onBlur={passwordValue} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <div className='text-danger'>
                              {error}
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">LogIn</button>
                  </form>
                  <br />
                  <p>Don't Have an Account? <Link to='/signup'>Register Here</Link></p>
                  <div>
                        <h3 className='text-primary mt-5'>LogIn With Google</h3>

                        < button onClick={handeGoogleLogIn} className='btn-danger p-2 mt-5'>Google SignUp</button>

                        <br /><br />

                  </div >
            </div>
      );
};

export default Login;