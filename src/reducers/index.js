// Get cuurent state and the action

export default function movies(state=[],action){
    if(action.type=='ADD_MOVIES')
    {
        return action.movies;
    }
    return state;
} 