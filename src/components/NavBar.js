import React from "react";
import { StoreContext } from "..";
import { addMovie, handleMovieSearch } from "../actions";

class NavBar extends React.Component {

    constructor(props){
        super(props);

        this.state={
            showSearchResults:false,
            searchText:' '

        };
    }
    

    handleAddMovie=(movie)=>{
        this.props.dispatch(addMovie(movie));
        this.setState({
            showSearchResults:false
        });
    };
    handleSearch=()=>{
        this.setState({
            showSearchResults:true
        });
        this.props.dispatch(handleMovieSearch(this.state.searchText));
    };
    handleChange=(e)=>{

        // It automatically merges with the othet state
        this.setState({
            searchText:e.target.value
        });
    };


    render() { 
        const {result}=this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input type="text" onChange={(e)=>{this.handleChange(e)}} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>


                {
                    this.state.showSearchResults&&
                    <div className="search-results">
                        <div className="search-result">
                            <img src={result.Poster} />

                            <div className="movie-info">
                                <span>{result.Title}</span>
                                <button onClick={()=>{this.handleAddMovie(result)}}>Add To Movies</button>

                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
 
class NavbarWrapper extends React.Component {
    render() { 
       return (

        <StoreContext.Consumer>
            {
                (store)=>{
                    return (
                        <NavBar dispatch={store.dispatch} search={this.props.search}></NavBar>
                    );
                }
            }
        </StoreContext.Consumer>


       );
    }
}
 
export default NavbarWrapper;

