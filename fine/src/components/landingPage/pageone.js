import React from 'react'
import { Link, Redirect,useHistory } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import { AiFillEye } from "react-icons/ai"
import { AiFillEyeInvisible } from "react-icons/ai"
import { Card } from "@mui/material"
import { CardContent } from "@mui/material"
import { Button } from "@mui/material"

import './land.css'


const Register = () => {
    let history=useHistory()

    const Login = async ()  => {
        history.push("/login");
        }
        const registration = async ()  => {
        history.push("/register");
        }

    return (

        <div className="container py-5 mt-5">

          
            <div className="mx-auto my-auto shadow p-5" id="container-login">
                <div className=''>
                    <h2 startIcon={<HowToVoteOutlinedIcon />} className="text-center mb-4 head">GENERAL ELECTION</h2><hr/>
                </div>
                
                
                <div className='contentt'>
                    <p>A web app, utilizing the blockchain technology. To achieve effective eVoting, This is the way to go!</p>
                         <Button onClick={Login} variant='contained' color='primary' startIcon={<LoginIcon />} className='m-2'>log in </Button>
                         <Button onClick={registration} variant='outlined' startIcon={<HowToRegRoundedIcon />} color='success'>sign up</Button>
                         </div>
                
            </div>
        </div>
    )
}
export default Register;