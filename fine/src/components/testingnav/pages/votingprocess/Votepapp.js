import React, {useEffect , useState} from 'react';
//import Electionabi from "./contracts/Election.json";
//import Electionabi from "/home/coder/Videos/loyal/fine/fine/src/contracts/Election.json";
import Electionabi from "../../../../contracts/Election.json";
import Web3 from "web3";
//import Navbar from './Navbar';
import Body from './Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';
// import "jquery/dist/jquery.slim.min.js";

import Sidenav from '../../sidenav';

function Votepapp() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, [])

  const[Currentaccount, setCurrentaccount] =  useState("");
  const[loader,setloader] = useState(true);
  const[Electionsm,SetElectionsm] = useState();
  const[Candidate1,setCandidate1] = useState();
  const[Candidate2,setCandidate2] = useState();
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const LoadBlockchaindata = async () => {
      setloader(true);
      const web3 = window.web3;

      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setCurrentaccount(account);
      const networkId = await web3.eth.net.getId();

      const networkData = Electionabi.networks[networkId];

      if(networkData){
        const election = new web3.eth.Contract(Electionabi.abi,networkData.address);
        const canidate1 = await election.methods.candidates(1).call();
        // const canidate1id = canidate1.id;
        // const canidate1name = canidate1.name;
        // const canidate1votecount = canidate1.voteCount;
        const canidate2 = await election.methods.candidates(2).call();
        // const canidate2id = canidate2.id;
        // const canidate2name = canidate2.name;
        // const canidate2votecount = canidate2.voteCount;
        setCandidate1(canidate1);
        setCandidate2(canidate2);
        SetElectionsm(election);
        setloader(false);
      }else{
        window.alert('The smart contract is not deployed on current network')
      }
  }

  const votecanidate = async(canidateid) => {
    setloader(true);
    await Electionsm.methods
      .vote(canidateid)
      .send({ from: Currentaccount})
      .on("transactionhash", ()=>{
        console.log("successfully run");
      });
      setloader(false);
      window.setTimeout(function () {
        window.location.reload();
      });
  }
  if(loader){
    return <div>
       <Sidenav />
       <p style={{color: "black", fontSize: "18px" ,align: "center", paddingLeft: "50%", paddingTop: "5%"}}>loading...</p>
      </div>
  }

  return (
    <div class="page-content p-5" id="content">
   
    {/* <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small></button> */}
    <div className='vote'>
       {/* <Navbar account={Currentaccount}/> */}
       <Sidenav />
       <Body 
          canidate1={Candidate1} 
          canidate2={Candidate2} 
          votecanidate={votecanidate}
          account={Currentaccount}
       />
    </div>

    </div>
  );
}

export default Votepapp;
