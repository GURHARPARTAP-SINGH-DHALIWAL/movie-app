// Get cuurent state and the action
import { ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE, SHOW_FAVOURITE } from "../actions";
 
const initialState={
    list:[],
    favourites:[],
    showFavourite:false
};

export default function movies(state=initialState,action){
    // if(action.type==ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites:[action.movie,...state.favourites]

            }
        case REMOVE_FAVOURITE:

            const filteredArray=state.favourites.filter((movie)=>{
               return movie.Title!==action.movie.Title;
            });
            return {
                ...state,
                favourites:filteredArray

            };
        case SHOW_FAVOURITE:
            return {
                ...state,
                showFavourite:action.val
            }
        default:
            return state;
    }
} 