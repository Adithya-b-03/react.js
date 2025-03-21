import React from 'react';
import {useParams} from 'react-router-dom';

const Login = ()=>{
    let {newUser} = useParams();

    return(
        <div>
            Login - {newUser}
        </div>
    )
}

export default Login;