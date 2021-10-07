
// Action Types
export const ADD_MOVIES='ADD_MOVIES';


// Action Creators
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}