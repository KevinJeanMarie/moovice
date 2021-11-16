import React, { Component } from 'react'
import Card from "../components/Card"

export default class Favorites extends Component {
    constructor(){
        super()

        this.state = {
            movies: [],
            favoriteid: this.getStorage()

        }
        this.getStorage = this.getStorage.bind
        this.getMovie = this.getMovie.bind
    }

    componentDidMount(){
        this.state.favoriteid.forEach(movies=>{
        fetch(this.getMovie(movies))
        .then(response => response.json())
        .then(data => this.setState({movies: [...this.state.movies, data]}))
        
        })
    }

    getStorage(){
        const favorite = localStorage.getItem('favorites')
        const array = JSON.parse(favorite)
        return array
    }

    getMovie(id){
        const getMovieLink = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f`
        return getMovieLink
    }
    
    render() {
        return (
            <div>
                <h1>Favorites</h1>
                {this.state.movies.map(movie =>{
                    return(
                        <Card 
                        key={movie.id}
                        titlemovie={movie.title}
                        datemovie={movie.release_date}
                        overviewmovie={movie.overview}
                        imagemovie={movie.poster_path} />
                    )
                })}
            </div>
        )
    }
}

