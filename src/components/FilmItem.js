import React, { Component } from 'react';

class FilmItem extends Component {
  render(){
    return (
      <div class="film-item">
        <h2>{this.props.name}</h2>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default FilmItem;
