import React, { Component } from 'react';


class ProjectCard extends Component {
  render() {


    const backgroundImage = {
      float: 'left',
      width:  '380px',
      height: '240px',
      backgroundPosition: '50% 50%',
      backgroundImage: `url('${this.props.img}')`,
      backgroundRepeat:   'no-repeat',
      backgroundSize:     'cover',
      marginTop:'1em'
    }

    return (
      <div className='cardContainer'>
        <div>
          <div className='port-item'>
          <h3>{this.props.name}</h3>
          <a href={this.props.url}>{this.props.simpleUrl}</a>
        </div>
        <div style={backgroundImage} className='small-images'>
        </div>

      </div>
      </div>
    );
  }
}

export default ProjectCard;
