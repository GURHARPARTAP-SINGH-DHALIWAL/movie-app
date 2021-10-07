import React from "react";
import { addFavourtie, removeFavourtie } from "../actions";

class MovieCard extends React.Component {

    handleFavouriteClick=()=>{

        this.props.dispatch(addFavourtie(this.props.movie));
        
    }

    handleUnFavouriteClick=()=>{


        this.props.dispatch(removeFavourtie(this.props.movie));
        
    }


    render() {
        const {movie,isFavourite}=this.props; 
        
           console.log(isFavourite,movie);


        return (
          
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>

                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {   
                      
                            isFavourite 
                            ?
                            <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourtie</button>

                            :
                            <button className="favourite-btn" onClick={this.handleFavouriteClick}>Add Favourtie</button>

                        }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MovieCard;