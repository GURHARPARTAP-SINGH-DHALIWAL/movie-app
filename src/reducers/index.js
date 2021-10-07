// Get cuurent state and the action
import { ADD_MOVIES } from "../actions";
 
const initialState={
    list:[],
    favourites:[]
};

export default function movies(state=initialState,action){
    if(action.type==ADD_MOVIES)
    {
        return {
            ...state,
            list:action.movies
        };
    }
    return state;
} 