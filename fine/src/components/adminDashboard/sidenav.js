import React from 'react';
import './sidenav.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";
import $ from 'jquery';

class  Home extends React.Component {
      
      componentDidMount(){
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar, #content').toggleClass('active');
          });
        
        }
    
 
  render() {
   
    return (
     
      <div className="maincontainer">
       
   <div className="vertical-nav bg-white" id="sidebar">
      
    <ul className="nav flex-column bg-white mb-0 mt-5">
      <li className="nav-item">
        <a href="/members" className="nav-link text-dark font-bold bg-light fs-5">
                  <i className="fa fa-home mr-3 text-primary fa-fw" ></i>
                Voters
              </a>
              
      </li>
      
      <li className="nav-item">
        <a href="/electionresults" className="nav-link text-dark font-bold bg-light fs-5">
                  <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                 Election
              </a>
              
      </li>
      <li className="nav-item">
     
        <a href="/" className="nav-link text-dark font-bold bg-light fs-5">
                  <i className="fa fa-sign-out mr-3 text-primary fa-fw"></i>
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
