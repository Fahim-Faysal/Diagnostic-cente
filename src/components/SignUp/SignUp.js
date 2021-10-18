import userEvent from '@testing-library/user-event';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import UseFirebase from '../../hooks/UswFirebase';

const SignUp = () => {
      const { user, GoogleSignIn, googleSignOut } = useAuth()
      return (
            <div>
                  <h3 className='text-primary mt-5'>SignUp With Google</h3>

                  < button onClick={GoogleSignIn} className='btn-danger p-2 mt-5'>Google SignUp</button>

                  <br /><br />
                  < button onClick={googleSignOut} className='btn-danger p-2 mt-5'>SignOut</button>




            </div >
      );
};

export default SignUp;