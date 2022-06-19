import React from 'react';

export class MovieCard extends React.Component {
  render() {
	  const {movie} = this.props;
    return <div className="movie-card">{movie.Title}<br/>{movie.Plot}<br/> <img crossOrigin="anonymous" src={movie.Poster} /></div>;
  }
}