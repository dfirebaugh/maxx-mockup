import React, { Component } from 'react';
import CompanyLogo from '../assets/Company-Logo.png';

class TopNav extends Component {
  render(){
    return (
        <div className='topNav container'>
          <nav className=" navBarWhite row">

            <img alt='companyLogo' className='navbar-brand mr-auto float-md-left App-logo ' src={CompanyLogo}></img>

            <div className="topBar-text float-md-right col-md-3">
                  <h1>{`HELLO, I'M SAM`}</h1>
                  <p>Web Designer</p>
            </div>
          </nav>
      </div>
    );
  }
}


export default TopNav;
