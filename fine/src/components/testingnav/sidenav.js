import React,  { useState, useEffect } from 'react';
import './sidenav.css';
import homeIcons from 'react-bootstrap-icons/dist/icons/info'
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import { ToggleButton } from '@mui/material';
import {NavLink} from 'react-router-dom';



 
  
class  Home extends React.Component {
      
  

      componentDidMount(){
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar, #content').toggleClass('active');
          });
        
        }
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
       
<div class="vertical-nav bg-white" id="sidebar">
    {/* <div class="py-4 px-3 mb-0 bg-light">
      <div class="media d-flex align-items-center"><img src={logo} alt="Voting Dapp Logo" width="80" class="mr-4 rounded-square img-thumbnail shadow-sm" /> */}
        {/* <div class="media-body"> */}
          {/* <h4 class="m-0"></h4> */}
          {/* <p class="font-weight-light text-muted mb-0">****</p> */}
        {/* </div> */}
      {/* </div>
    </div> */}
    
  
    {/* <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p> */}
  
    <ul class="nav flex-column bg-white mb-0 mt-5">
      <li class="nav-item">
        <a href="/dash" class="nav-link text-dark font-bold bg-light fs-5">
                  <i class="fa fa-home mr-3 text-primary fa-fw"></i>
                Home
              </a>
              
      </li>
      
      <li class="nav-item">
        <a href="/vote" class="nav-link text-dark font-bold bg-light fs-5">
                  <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                  Vote
              </a>
              
      </li>
      <li class="nav-item">
     
        <a href="/" class="nav-link text-dark font-bold bg-light fs-5">
                  <i class="fa fa-sign-out mr-3 text-primary fa-fw"></i>
                  Logout
              </a>
      </li>
      
    </ul>
  </div>  
  </div>
     
      
)
}
};

export default Home;












// import React,  { useState, useEffect } from 'react';
// import './sidenav.css';
// import homeIcons from 'react-bootstrap-icons/dist/icons/info'
// //Importing bootstrap and other modules
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';
// import "jquery/dist/jquery.slim.min.js";
// import $ from 'jquery';
// import { useHistory } from 'react-router-dom';
// import { ToggleButton } from '@mui/material';




// const Home = () => {
      
//   const history = useHistory();
 
  

//   const Vote = async ()  => {
//      history.push("/vote");
//   }
     
//   const Dash = async ()  => {
//     history.push("/dash");
//  }

//  const signout = async ()  => {
//   history.push("/");
// }

      
   
//     return (
     
//       <div className="maincontainer">
       
// <div class="vertical-nav bg-white" id="sidebar">
    
    
  
  
//     <ul class="nav flex-column bg-white mb-0 mt-5">
//       <li class="nav-item">
//         <a onClick={Dash} class="nav-link text-dark font-bold bg-light fs-5">
//                   <i class="fa fa-home mr-3 text-primary fa-fw"></i>
//                 Home
//               </a>
              
//       </li>
      
//       <li class="nav-item">
//         <a onClick={Vote} class="nav-link text-dark font-bold bg-light fs-5">
//                   <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
//                   Vote
//               </a>
              
//       </li>
//       <li class="nav-item">
     
//         <a onClick={signout} class="nav-link text-dark font-bold bg-light fs-5">
//                   <i class="fa fa-sign-out mr-3 text-primary fa-fw"></i>
//                   Logout
//               </a>
//       </li>
      
//     </ul>
//   </div>  
//   </div>
     
      
// )
// };

// export default Home;