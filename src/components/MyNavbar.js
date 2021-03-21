import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 export default class MyNavbar extends Component {
    render() {
        return (
<nav className="navbar-expand-lg navbar navbar-dark bg-dark mb-4">
      <ul className="navbar-nav mb-4 mt-2 mt-lg-4 text-muted " style={{fontSize:"20px"}}>
        <li className="nav-item active px-3 ">
          <Link to="/Tic-Tac-Toc">Tic-Tac-Toc</Link>
        </li>
        <li className="nav-item active px-3 ">
          <Link to="/Home">Home</Link>
        </li>
      </ul>
      </nav>
        )
    }
}