import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import "jquery/dist/jquery.slim.min.js";

const Body = ({ canidate1, canidate2, votecanidate, account }) => {

    const[Canidate,setCandidate] = useState("");

    const onchange = (e) => {
        setCandidate(e.target.value);
        console.log(e.target.value);
    }
    const onsubmit = (e) => {
        e.preventDefault();
        if (Canidate.id !== 0) votecanidate(Number(Canidate));
        else window.alert("There is error in submission");
    };
    return (
        <div className="mt 4 text-center style={{ color: '#000000'}}">
               <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2"></i><small class="text-uppercase font-weight-bold">toggle</small></button>

            <h2>Live Election</h2>
            <hr
              style={{
                 width: "88%",
                 borderStyle: "solid",
                 borderWidth: "2px",
                 borderColor: "#000000",
              }}             
            />
            <div className="p-3 m1-auto mr-auto" style={{wudth: "40%" }}>
                <div className="row m1-auto mr-auto mb-2" style={{ width: "90%" }}>
                   <div className="col">
                       <p>Candidate ID</p>
                   </div>
                   <div className="col">
                       <p>Candidate Name</p>
                   </div>
                   <div className="col">
                       <p>Votes</p>
                   </div>
                </div>
                <hr
                  style={{ width: '90%', borderStyle: 'solid', borderColor: '#000000'}}
                />
                <div className="row m1-auto mr-auto mb-2" style={{ width: "90%" }}>
                <div className="col">
                      <p>{canidate1.id}</p>
                    </div>
                    <div className="col">
                      <p>{canidate1.name}</p>
                    </div>
                    <div className="col">
                      <p>{canidate1.voteCount}</p>
                    </div>
                </div>
                <hr
                  style={{ width: '90%', borderStyle: 'solid', borderColor: '#000000'}}
                />
                <div className="row m1-auto mr-auto mb-2" style={{ width: "90%" }}>
                    <div className="col">
                      <p>{canidate2.id}</p>
                    </div>
                    <div className="col">
                      <p>{canidate2.name}</p>
                    </div>
                    <div className="col">
                      <p>{canidate2.voteCount}</p>
                    </div>
                </div>

                <div className="my-5 mr-auto ml-auto text-left" style={{ width: "70%" }}>
                    <h5>Cast Your Vote:</h5>
                    <form onSubmit={onsubmit}>
                        <select name="candidate" className="form-control" onChange={onchange}>
                            <option defaultValue value="">
                               Select
                            </option>
                            <option value="1">{canidate1.name}</option>
                            <option value="2">{canidate2.name}</option>
                        </select>
                        <button className="btn btn-primary mt-2 btn-md w-100">
                            Vote Candidate{" "} {Canidate}
                        </button>
                    </form>
                </div>
                <p className="my-5">
                   <a href="javascript:window.location.reload(true)" className="btn btn-default btn-md w-30" >RLD</a> 
                    Your address: <span className="font-weight-bold">{account}</span>{" "}
                </p>
            </div>
            
        </div>
    )
}

export default Body
