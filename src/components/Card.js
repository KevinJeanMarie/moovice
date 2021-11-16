import React, { Component } from 'react'

export default class Card extends Component {
    render() {

         const { titlemovie, datemovie, overviewmovie, imagemovie } = this.props

        return (
            
            <div className="Card"> 
                <div className="listmovie">
                    <div className="img-container rounded mb-3" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300/${imagemovie}')`, height:"430px", backgroundRepeat:"no-repeat"}}></div>
                    {/* <img src="https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png" width="300px"></img> */}
                    <p><strong>{titlemovie}</strong></p>
                    <p>{datemovie}</p>
                    <p>{overviewmovie}</p><br/><br/>         
                </div>
            </div>
                
                
        )
    }
}
