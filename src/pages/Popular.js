import React, { Component } from 'react'
import Card from "../components/Card"

export default class Popular extends Component {
    constructor(){
        super()

        this.state = {
        movies: []
        }
    }



    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data =>{
            
             console.log(data.results)
            this.setState({ movies: data.results})
        })
    }
    render() {
        console.log("on affiche le state de movies", this.state.movies)

        
        
        return (
            <div>
                <h1>Popular</h1>
                {this.state.movies.map((movie) => {
                    // APPELER LE COMPOSANT CARD POUR CHAQUE MOVIE
                    // PASSER DES PROPS TITLE ETC... A CARD
                    // UTILISER LES PROPS DANS CARD POUR CREER UN AFFICHAGE 
                    return (

                        <Card 
                        key={movie.id}
                        titlemovie={movie.title}
                        datemovie={movie.release_date}
                        overviewmovie={movie.overview}
                        imagemovie={movie.poster_path}
                    
                            />
                    )
                })}
            </div>
        )
    }
}
