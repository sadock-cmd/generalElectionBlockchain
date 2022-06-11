import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import Sidenav from '../sidenav';

const Details = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }
 
    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setEmail(decoded.email);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }
 

    return (
       
        <div class="page-content p-5" id="content">
          <Sidenav />
   
    {/* <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small></button> */}
  
    <div class="row text-black">
      <div class="col-lg-14">
        
          <div className="earlycard" style={{ width: "46rem" }}>
                    
                      <div className="jumbotron">
                          <h1 className="display-6 font-weight-bolder" style={{fontStyle:""}}> USER DETAILS</h1>
                          <hr class="my-4"/>
                          <p className="fs-2">User name: {name}</p>
                          <p className="fs-2">Email: {email}</p>
                          
                            {/* <p className="fs-2"> This is the way to go !!.</p> */}
     
                      </div>                       
                    
            </div> 
            </div>
            </div>
     
  </div>
    )
}

export default Details


