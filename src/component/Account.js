import React,{useState,useEffect} from 'react'
import { UserAuth } from '../server/Auth';
import {db} from '../server/firebase-config';
import {collection,getDocs} from 'firebase/firestore';

  const Account = () => {
    const [StateChange,setStateChange] = useState([]);
    const usersCollectionRef = collection(db,"data");
    const {User} = UserAuth()
  
  
    useEffect(()=>{
      const getUser = async () =>{
        const data = await getDocs(usersCollectionRef);
        setStateChange(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        };
      getUser();
    })

 return (
    <div className='account container-lg'>
       <img  class="rounded-circle border border-dark" id='img' src={User.photoURL}/><br/>
        <h1>{User.displayName}</h1>
        <p>{User.email}</p><br/>
            <table className="table table-responsive-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">City</th>
                  <th scope="col">Gender</th>
                </tr>
              </thead>
            </table>

        {StateChange.map((data)=>{
          return(
            
            <table className="table table-responsive table-hover">

              <tbody>
                  <tr>
                    <td>{data.Email}</td>
                    <td>{data.Password}</td>
                    <td>{data.Name}</td>
                    <td>{data.Number}</td>
                    <td>{data.City}</td>
                    <td>{data.Gender}</td>
                  </tr>
              </tbody>
            </table>
           
        )
        })}

    </div>
 )
};
export default Account;