
// Action Types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export const SHOW_FAVOURITE='SHOW_FAVOURITE';


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