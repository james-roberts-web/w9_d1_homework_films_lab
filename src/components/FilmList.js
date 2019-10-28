import React, { Component } from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {

  render() {

    const filmNodes = this.props.films.map(film => {
      return (
        <FilmItem name={ film.name } key={ film.id } >
        <a href={film.url}> View more Info </a>
        </FilmItem>
      );
    });

    return (
      <div className="film-list">
      { filmNodes }
      </div>
    )
  }
}

export default FilmList;
