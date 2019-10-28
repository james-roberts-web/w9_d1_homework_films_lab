import React, { Component } from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {

  render() {

    const filmNodes = this.props.films.map(film => {
      return (
        <div className="film-list">
          <FilmItem name={ film.name } key={ film.id } >
          <a href={film.url}> View more info on IMDB</a>
          </FilmItem>
        </div>
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
