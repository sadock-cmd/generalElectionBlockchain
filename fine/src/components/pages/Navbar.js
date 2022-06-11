import React from 'react'
import firebase from '../firebase'
import {useHistory} from 'react-router-dom'
const Navbar = () => {
  let history=useHistory()

  const handleLogout = () => {
    if (window !== 'undefined') {
      if (localStorage.getItem('user') !== null) {
        localStorage.removeItem('user');
      } else {
        localStorage.removeItem('admin');
      }
    }
    firebase.auth().signOut();
    history.push("/")
  } 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Evolv Fit</a>
        <div><button class="btn btn-secondary btn-sm" onClick={handleLogout}>Logout</button></div>
      </div>
    </nav>
  )
}
export default Navbar