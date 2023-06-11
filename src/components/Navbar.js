import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            
          </form> */}
          <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input class="form-check-input" onClick={props.toggleBlue}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">{props.text}</label>
          </div>
  
          {/* <button className="mx-1" onClick={props.toggleBlue}>{props.text}</button> */}
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={props.toggleBlue} style={{height:'20px',width:'20px'}}></div>
          </div> */}
          {/* greenish dark mode */}

          {/* <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input class="form-check-input" onClick={props.toggleGreen}type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
            <label class="form-check-label" for="flexSwitchCheckChecked">{props.textforGreen}</label>
          </div> */}
          {/* <button class="mx-1" onClick={props.toggleGreen}>{props.textforGreen}</button> */}
          <div className="d-flex">
            <div className="bg-success rounded mx-2" onClick={props.toggleGreen} style={{height:'20px',width:'20px'}}></div>
          </div>
          {/* rose dark mode */}

          {/* <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input class="form-check-input" onClick={props.toggleRose}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault"> {props.textforRose}</label>
          </div> */}
          {/* <button class="mx-1" onClick={props.toggleRose}>{props.textforRose}</button> */}
          <div className="d-flex">
            <div className=" rounded mx-2" onClick={props.toggleRose} style={{height:'20px',width:'20px',backgroundColor:"#7b2851"}}></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
// if i dont pass props then set the default props
Navbar.defaultProps = {
  title: "set title here",
  aboutText: " About text here"
}
