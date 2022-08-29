import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../server/Auth';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

  const {googleSignIn, User} = UserAuth();
  const navigate =  useNavigate()

  const handleGoogleSignIn = async () =>{
      try{
          await googleSignIn();
      }catch(error){
          console.log(error)
      }
  };

  useEffect(()=>{
    if (User != null)
    navigate('/account')
  },[User])

  return (
    <div className='signin'>
      <h1 class="align-items-center">Sign In</h1>
      <GoogleButton class="container-fluid align-items-center" onClick={handleGoogleSignIn}/>
      {/* <button class="container-fluid align-items-center" onClick={handleGoogleSignIn}></button> */}
    </div>
  )
}

export default Signin;