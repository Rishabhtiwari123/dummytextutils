import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title,aboutText,myStyle,changeStyle,showAlert}) => {
  return (
   <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${mode==='dark'?'dark':'light'} bg-${mode==='dark'?'dark':'light'}`}> */}
      <nav className={`navbar navbar-expand-lg navbar-${myStyle.color==='black'?'dark':'light'} bg-${myStyle.color==='black'?'dark':'light'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="/about">{aboutText}</a>
        </li>
      </ul>
    </div>          
    {/* <div class="form-check form-switch">
  <input class="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label"  htmlFor="flexSwitchCheckChecked" style={{color:mode==='light'?'black':'white'}}>{btntext}</label>
</div> */}
<button className="btn btn-primary" style={{backgroundColor:'red'}} onClick={()=>{changeStyle('orange')}}></button>
<button className="btn btn-primary" style={{backgroundColor:'blue'}} onClick={()=>{changeStyle('blue')}}></button>
<button className="btn btn-primary" style={{backgroundColor:'green'}} onClick={()=>{changeStyle('green')}}></button>
<button className="btn btn-primary" style={{backgroundColor:'grey'}} onClick={()=>{changeStyle('grey')}}></button> 
  </div>
</nav>
   </>
  )
}

Navbar.propTypes={title:PropTypes.string.isRequired}
Navbar.defaultProps={
  title:'Set title here',
  aboutText:'About Text Here'
}
export default Navbar
