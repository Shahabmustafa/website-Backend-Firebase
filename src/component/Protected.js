import React from 'react'
import { UserAuth } from '../server/Auth';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {

    const {User} = UserAuth();
    if (!User ){
        return <Navigate to="/"/>
    }

  return children;
}

export default Protected;