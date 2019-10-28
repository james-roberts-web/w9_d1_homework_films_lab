import React, { Component } from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {

  render() {

    const filmNodes = this.props.films.map(film => {
      return (
        <FilmItem name={ film.name } key={ film.id }>
        <p> {film.url} </p>
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
