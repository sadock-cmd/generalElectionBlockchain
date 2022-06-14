import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";
import firebase from '../../firebase';

const Home = () => {


    const [loading, setLoading] = useState(true);
    const [voters, setVoters] = useState([]);
    const ref =firebase.firestore().collection("users");

    
    const deleteUser = async (id) => {
        ref.doc(id).delete().then(() => {
                 console.log("Document successfully deleted!");
             }).catch((error) => {
                 console.error("Error removing document: ", error);
    })

    };

    useEffect(()=> {
              
        const getVotersFromFirebase = [];

        const subscriber = ref.get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                getVotersFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                });
                console.log(doc.data());
            });
            setVoters(getVotersFromFirebase);
            setLoading(false);
        });

        return () => subscriber;
    }, [loading]);

    if(loading){
        return  <p style={{color: "black", fontSize: "18px" ,align: "center", paddingLeft: "50%", paddingTop: "5%"}}>Loading Registered Voters data ......</p>

    }


    return (
        <div class="page-content p-5" id="content" style={{ textAlign: "justify" }}>
   
       <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i class="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">Toggle</small></button>
  
     <div class="row text-black">
      <div class="col-lg-14">
         <h1>REGISTERED VOTERS</h1>
         <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Registration</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>
                <tbody>
                      {voters.length > 0 ? (
                         voters.map((voter, index) => 
                          
                            <tr key={voter.key}>
                                <td>{index + 1}</td>
                                <td>{voter.name}</td>
                                <td>{voter.email}</td> 
                                <td>{voter.createdAt}</td>
                                {/* <td><button className='btn btn-danger btn-sm' onClick={() => {deleteUser(voter.key)}}>Delete</button></td> */}
                           </tr> 
                        ) 
                        ): (
                             window.alert("NO REGISTERED VOTERS YET!")
                            ) 
                            
                }
                      
                    
                </tbody>
            </table>           
    
      </div>
    </div>     
  </div>
    )
}

export default Home


