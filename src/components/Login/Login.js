import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../../firebase';
import { login } from '../../features/userSlice';

const Login = () => {
    const dispatch=useDispatch();
    const signin=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(
                login({
                    displayname:user.displayName,
                    email:user.email,
                    photoURL:user.photoURL,
                })
            )
        })
    }
  return (
    <Box>
        <Button variant='contained' sx={{mt:50,ml:10}} onClick={()=>signin()}>Login </Button>
        
        </Box>
  )
}

export default Login