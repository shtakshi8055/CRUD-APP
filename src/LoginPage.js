import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

function LoginPage(){

    let navigate = useNavigate();

    const LoginButton = () =>{
        navigate('/Read')
    }

    return(
        <div>
            <h1>Logged in successfully!!</h1>

            <div>
                <Button onClick={LoginButton}>Log Out</Button>
            </div>
        </div>
    )
}

export default LoginPage;