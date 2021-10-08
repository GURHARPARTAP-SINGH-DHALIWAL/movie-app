// Get cuurent state and the action
import { ADD_FAVOURITE, ADD_MOVIES, ADD_SEARCH_RESULT, REMOVE_FAVOURITE, SHOW_FAVOURITE ,ADD_MOVIE} from "../actions";
import { combineReducers } from "redux";
 
const initialState={
    list:[],
    favourites:[],
    showFavourite:false
};

export  function movies(state=initialState,action){
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
        case ADD_MOVIE:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }
} 


const initialSearchState={
    result:{}
};

export  function search(state=initialSearchState,action)
{   

    switch(action.type){
        case ADD_SEARCH_RESULT:
            console.log("search state",state);
            return {
                ...state,
                result:action.movie
            }
        default:
            return state;

    }
    return state;
}


const initialRootState={
    movies:initialState,
    search:initialSearchState
};


// export  function rootReducer(state=initialRootState,action)
// {
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     };
// }


export default combineReducers({
    movies,
    search
});