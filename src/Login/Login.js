import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,googleProvider} from './../firebase'
const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(googleProvider).then(authuser=>{
                alert(`User ${authuser.user.displayName} logged in successfully`)
            }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/IMessage_logo_%28Apple_Inc.%29.png/250px-IMessage_logo_%28Apple_Inc.%29.png'  alt='Imessage logo'/>
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>
            SignIn with Google
            </Button> 
        </div>
    )
}

export default Login