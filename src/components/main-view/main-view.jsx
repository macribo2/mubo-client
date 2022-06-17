import React from 'react';
import { MovieCard } from '../movie-card/movie-card';

export class MainView extends React.Component{


	constructor(){
		super();
		this.state = {
		  movies: [
			{ _id: 1, Title: 'SpaceBalls', Description: 'desc1...', ImagePath: '...'},
			{ _id: 2, Title: 'SpaceBar', Description: 'desc2...', ImagePath: '...'},
			{ _id: 3, Title: 'Space Actually', Description: 'desc3...', ImagePath: '...'},
			{ _id:4,"Title":"Lloyd in Space","Year":"2001–2004","Rated":"TV-Y7","Released":"03 Feb 2001","Runtime":"30 min","Genre":"Animation, Adventure, Comedy","Director":"N/A","Writer":"Paul Germain, Joe Ansolabehere","Actors":"Courtland Mead, Pamela Hayden, Bill Fagerbakke","Plot":"A Disney show centered around Lloyd, an alien, living in space and going through \"ordinary\" life with family and friends as a 12 year old.","Language":"English","Country":"United States, Canada","Awards":"1 nomination","ImagePath":"https://m.media-amazon.com/images/M/MV5BZTg0ZWQxNjctOGI3Ny00NmUxLWI1OGUtNzU1ZmFlMTlmMDA1XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"}],"Metascore":"N/A","imdbRating":"6.7","imdbVotes":"1,396","imdbID":"tt0275848","Type":"series","totalSeasons":"4","Response":"True"}

		  ]
		}
	  }
	
	render(){

		const movies = this.state.movies;
		if(movies.length === 0){
			return <div className="main-view">No movies found!</div>
		}else{
		return(
			<div className="main-view">
					{movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
		
			</div>
		)
	}


}}

