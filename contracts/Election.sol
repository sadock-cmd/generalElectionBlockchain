//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Election{
    //Model a Candidate
    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }
    //Store accounts that have voted
    mapping(address => bool) public votedornot;
    //Fetch Candidate
    mapping(uint => Candidate) public candidates;
    //Store candidate count 
    uint public candidatesCount;
   //voted event
    event electionupdates(
        uint indexed _candidateId
        );

    constructor(){
        //the code that we want to initiate
        addCandidate("Chelsia Bernard");
        addCandidate("Sadock Mlanga");

    }
    //add candidates 
    function addCandidate(string memory name) private{
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }
    function vote (uint _candidateId) public{
        //require that voter has not voted before
        require(!votedornot[msg.sender]);
        //require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);
        //update candidate vote count
        candidates[_candidateId].voteCount++;
        //record that voter has voted
        votedornot[msg.sender] = true;
        //trigger voted event
        emit electionupdates(_candidateId);
    }

}