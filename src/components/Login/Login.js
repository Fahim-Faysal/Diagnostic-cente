import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../hooks/useAuth';


const Login = () => {
      const { GoogleSignIn } = useAuth()
      const auth = getAuth();

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
            <div className='mx-auto w-50 mt-5'>
                  <h1 className='text-success'>Please Login Here</h1>
                  <form onSubmit={hendelRegistation}>
                        <div className="mb-3">
                              <label for="exampleInputEmail1" className="form-label">Email address</label>
                              <input onBlur={emailValue} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                              <label for="exampleInputPassword1" className="form-label">Password</label>
                              <input onBlur={passwordValue} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                              <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className='text-danger'>
                              {error}
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">LogIn</button>
                  </form>
                  <div>
                        <h3 className='text-primary mt-5'>SignUp With Google</h3>

                        < button onClick={GoogleSignIn} className='btn-danger p-2 mt-5'>Google SignUp</button>

                        <br /><br />

                  </div >
            </div>
      );
};

export default Login;