import React, { Component } from 'react';

import projects from './projects.js';
import ProjectCard from './ProjectCard.js';


class PortfolioObjs extends Component {
  render(){

    let cards = projects.map((card,i)=>{
      return <ProjectCard key={i} name={card.name} url={card.url} simpleUrl={card.simpleUrl} img={card.img}/>;
    })

    return (
        <div className='container portObjsContainer'>
          <h1 className='portfolio'>Portfolio</h1>
          <div className='cardHolder'>
            {cards}
          </div>
        </div>
    );
  }
}


export default PortfolioObjs;













// <div className="col-md-4">
// <div className='port-item'>
//
// <h3>TECHNOLINE</h3>
// <a href='http://tecnoline.com'>tecnoline.com</a>
//
// </div>
// <div className='small-images '>
// <img className='' src={imga} ></img>
// </div>
//
// </div>
//
// <div className="col-md-4">
// <div className='port-item '>
// <h3>MAJESTIQUE</h3>
// <a href='http://majestique.com'>majestique.com</a>
// </div>
//
// <div className='small-images '>
// <img className='' src={imgb} ></img>
// </div>
//
// </div>
//
// <div className="col-md-4">
// <div className='port-item'>
// <h3>SILVERZIM</h3>
// <a href='http://silverzim.com'>silverzim.com</a>
// </div>
// <div className='small-images '>
// <img className='' src={imgc} ></img>
// </div>
// </div>
