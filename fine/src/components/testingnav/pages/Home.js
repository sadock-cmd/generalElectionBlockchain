import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";


const Home = () => {
    return (
        <div className="page-content p-5" id="content" style={{ textAlign: "justify" }}>
   
    <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">Toggle</small></button>
    
    <div className="row text-black">
      <div className="col-lg-14">
        <p className="lead" >
        <h2 className="display-6 text-black mb-1">USER GUIDE</h2><hr/>
        Welcome dear user.<br/>
        Votedapp applies blockchain technology to conduct voting process, specifically Ethereum framework is utilized. 
        Having reached to this page, you are qualified to cast your vote to the system.
        The process works on any device that have access to internet e.i  smartphone and computer, you are highly recommended to use <b>google chrome</b> or <b>firefox browser</b> and to extend <b>metamask</b> to the browser (This will connect you to the blockchain). <br/>
        For smartphone users click <a href='https://metamask.io/download/' target="_blank">Mobile metamask.</a><br/>
        For computer users, click the links below to install and extend metamask to your browser.<br/>
        <ul>
          <li><a href='https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/' target="_blank">FireFox browser metamask</a></li>
          <li><a href='https://metamask.io/download/' target="_blank">Google chrome metamask</a></li>
        </ul>

        The smart contract is deployed in the Ropsten Test Network, therefore your metamask account should read on Ropsten Test Network. For voting process to be facilitated, user’s account balance should have ethers,
        To get ethers click of the following links :<a href='https://faucet.egorfine.com/' target="_blank"><i>link 1,</i></a> <a href='https://faucet.dimensions.network/' target="_blank"><i>link 2,</i></a> <a href='https://ropsten.chain.link/' target="_blank"><i>link 3.</i></a>

        Live voting functionality is implemented, hence you will be able to view the votes as they are being cast. To this end, this blockchain voting solution provides voters with a way to confirm that their voice has been heard and that election results, as a whole, are truly accurate.
        <br/>
        </p>
         
            <p className="lead text-black mb-3">The future of voting; Secure and accessible at your fingertips. 
        We leverage the unique attributes of blockchain technology to design the next generation of voting systems for organizations.</p>
        
          </div>
        </div>
             
  </div>
    )
}

export default Home


