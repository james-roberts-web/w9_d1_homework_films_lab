import React, { Component } from 'react';

class FilmItem extends Component {
  render(){
    return (
      <div class="film-item">
        <a href={this.props.children} >{this.props.name}</a>
      </div>
    )
  }
}

export default FilmItem;
