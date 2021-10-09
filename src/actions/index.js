
// Action Types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export const SHOW_FAVOURITE='SHOW_FAVOURITE';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export const ADD_MOVIE='ADD_MOVIE';


// Action Creators
export function addMovies(movies){

    // console.log("HEy");

    // Verify if dispatch is called again or not mayb it is as it modifies the data bbut it does not shows on console
    return {
        type:ADD_MOVIES,
        movies
    }
}


export function addFavourtie(movie){
    return {
        type:ADD_FAVOURITE,
        movie
    }
}

export function removeFavourtie(movie){
    return {
        type:REMOVE_FAVOURITE,
        movie
    }
}


export function showFavourtie(val){
    return {
        type:SHOW_FAVOURITE,
        val
    }
}


export function addMovie(movie){
    return{
        type:ADD_MOVIE,
        movie:movie
    }
}


export  function handleMovieSearch(movie){
    
//    See dispatch will not wait for the action creator to return a action to get dispatchedd so we sill send thunk as an action

     const url=`https://www.omdbapi.com/?apikey=9f78e0d5&t=${movie}`;

 return (dispatch)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
         dispatch(addSearchResult(data));
    });

}

    // const response=await fetch(url);
    // const data=await response.json();
    // return {
    //     type:ADD_SEARCH_RESULT,
    //     data
    // }
};


export function addSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie:movie
    }
}