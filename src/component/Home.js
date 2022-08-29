import React,{useState} from 'react'
import {db} from '../server/firebase-config';
import {collection,addDoc} from 'firebase/firestore';


  const Home = () => {
  const [Email,setEmail] = useState();
  const [Password,setPassword] = useState("");
  const [Name,setName] = useState("");
  const [Number,setNumber] = useState(0);
  const [City,setCity] = useState(0);
  const [Gender,setGender] = useState(0);

  

  const usersCollectionRef = collection(db,"data");

  const resultData = {
    Email : Email,
    Password : Password,
    Name : Name,
    Number : Number,
    City : City,
    Gender: Gender,
  }

  const createResult = async (e) =>{
    e.preventDefault()
    await addDoc(usersCollectionRef,{
        Email: Email,
        Password: Password,
        Name: Name,
        Number: Number,
        City: City,
        Gender: Gender,
    }

    );
    console.log(resultData)
  };


  return (
    <div className='home'>
    
          <form class="row g-3">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Name</label>
          <input type="text" class="form-control" id="inputCity" onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">NUmber</label>
          <input type="Number" class="form-control" id="inputCity" onChange={(e)=>{setNumber(e.target.value)}}/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select" onChange={(e)=>{setCity(e.target.value)}}>
            <option selected>Choose...</option>
            <option>Peshawar</option>
            <option>Charsadda</option>
            <option>Mardan</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select" onChange={(e)=>{setGender(e.target.value)}}>
            <option selected>Other</option>
            <option>Male</option>
            <option>Female</option>
            <option>choose...</option>
          </select>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={createResult}>Add Data</button>
        </div>
      </form>

    </div>
  )
}

export default Home;