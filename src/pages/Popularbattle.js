import React, { Component } from 'react'
import Card from "../components/Card"

export default class Popularbattle extends Component {
    constructor(){
        super()

        this.state = {
            movies: [],
            currentBattle: 0,
            favorites: []
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }



    componentDidMount(){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data =>{
            
             console.log(data.results)
            this.setState({ movies: data.results})
        })
    }

    handleOnClick(currentBattle, id){
        const Array = [...this.state.favorites, id]
        this.setState ({
            currentBattle: currentBattle + 2,
            favorites: Array
        })
        localStorage.setItem("favorites", JSON.stringify(Array))
        //console.log(localStorage)
    }

    handleClick(){
        localStorage.clear()
    }
    render() {
        // this.state.movies[0] ([0][1] <- INDEX pour récupéré le 1er et le 2eme élément du tableau)
        // this.state.movies[1]

        console.log("movie state",this.state.movies)
        console.log("movie 1",this.state.movies[0])// on peut enlever les state et l'index du haut vu qu'on les met dans les consoles
        console.log("movie 2",this.state.movies[1])

        //condition qui dis que si mon array movies[] est egal a 0 (egal a 0 car mon tableau est vide) on ne retourne pas de film
        if (this.state.movies.length === 0) {
            return(
                <p>Pas de film</p>
            )
        }
        
        return (

            // ici on a besoin d'afficher 2 éléments donc on affiche 2 Card [0]= 1er index [1]= 2eme index (1er et 2eme element du tableau)
            <div>
                <h1>Popular battle</h1>
                <button onClick={this.handleClick}>Remove localStorage item</button>
                {this.state.movies.length !== 0 && <>
                <Card
                        titlemovie={this.state.movies[0].title}
                        datemovie={this.state.movies[0].release_date}
                        overviewmovie={this.state.movies[0].overview}
                        imagemovie={this.state.movies[0].poster_path}
                        currentBattle={this.state.currentBattle}
                        onClick={() => this.handleOnClick(this.state.currentBattle, this.state.movies.id)} />
                
                <Card
                            titlemovie={this.state.movies[1].title}
                            datemovie={this.state.movies[1].release_date}
                            overviewmovie={this.state.movies[1].overview}
                            imagemovie={this.state.movies[1].poster_path}
                            currentBattle={this.state.currentBattle}
                            onClick={() => this.handleOnClick(this.state.currentBattle, this.state.movies.currentBattle.id)} /></>
                }

            </div>
    
        )
    }
}



