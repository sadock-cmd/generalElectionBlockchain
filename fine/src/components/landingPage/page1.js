import React from 'react'
import { Card, Body, Title, Subtitle, Text, Link,Button } from 'react-bootstrap'
import './mchongo.css'
import { useHistory } from 'react-router-dom';
import pic from './vote.ico';

const LandingPage = () => {
    const history = useHistory();

    const adminLogin = async ()  => {
        history.push("/adminlogin");
    }
    const userLogin = async ()  => {
    history.push("/login");
    }
    const registration = async ()  => {
    history.push("/register");
    }

    return (
        <div className="homepage-bgimage" style={{ paddingTop: "7%", paddingLeft: "26%"}}>
            <div className="earlycard" style={{ width: "46rem" }}>
                    
                      <div className="jumbotron">
                          <h1 className="display-5 font-weight-bolder" style={{fontStyle:""}}><img src={pic} alt="Voting Dapp Logo" width="80px" class="rounded-square img-thumbnail shadow-sm" /> VOTE DAPP</h1>
                          <hr class="my-4"/>
                          <p className="fs-3">A web app, utilizing the blockchain technology. To achieve effective eVoting, This is the way to go!</p>
                          
                            {/* <p className="fs-2"> This is the way to go !!.</p> */}
                            <Button onClick={userLogin} variant="primary" size="lg"><i className="fa fa-sign-in"> </i> Login</Button> {" "}
                            <Button onClick={registration} variant="secondary" size="lg" active><i className="fa fa-user-plus"> </i> Register</Button>{" "}{" "}
                            {/* <Button onClick={adminLogin} className='btn btn-outline-primary' size="lg" active><i className="fa fa-book"> </i> Admin</Button> */}
                      </div>                       
                    
            </div> 
            
        </div>
    )
}

export default LandingPage
