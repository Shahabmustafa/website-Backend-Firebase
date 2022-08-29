import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { UserAuth } from '../server/Auth';

const Navbar = () => {
  const {User,logOut} = UserAuth()

  const handleSignOut = async() =>{
    try{
        await logOut()
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='Navbar'>
    {/* <!-- As a link --> */}
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Web</a>
    <div>
    <img class="rounded-circle border border-dark" src={User?.photoURL}/>
    {User?.displayName ? (<button type="submit" class="btn btn-primary" onClick={handleSignOut}>Log out</button>)
    :(<Link type="submit" class="btn btn-primary" to="/Signin">Sign In</Link>)}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar