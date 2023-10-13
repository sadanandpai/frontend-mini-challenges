import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'light' ? 'dark' : 'dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
{/* <div className="d-flex mx-3 gap-2">
  <div onClick={props.toggleMode} className="circle pe-auto " style={{width:'30px', height:'30px',backgroundColor:'#EF4E8A',border:'1px solid black', borderRadius:'50px', cursor:'pointer'}}></div>
  <div onClick={props.toggleMode} className="circle" style={{width:'30px', height:'30px',backgroundColor:'yellow',border:'1px solid black', borderRadius:'50px', cursor:'pointer'}}></div>
  <div onClick={props.toggleMode} className="circle" style={{width:'30px', height:'30px',backgroundColor:'green',border:'1px solid black', borderRadius:'50px', cursor:'pointer'}}></div>
</div> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'light' : 'light'}`}>

            <input className="form-check-input" style={{ border: '2px solid #bfbfbf' }} onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'Set title here',
  abouttext: 'Set abouttext here'
}