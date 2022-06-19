import React from 'react';
import axios from 'axios';
import { MovieCard } from '../movie-card/movie-card';
export class MainView extends React.Component{


	constructor(){
		super();
		this.state = {
		  movies: [
		
		  ]
		}
	  }
	componentDidMount(){

		axios.get('https://enigmatic-garden-37759.herokuapp.com/movies').then(response =>{
			this.setState({movies:response.data});
		})
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

