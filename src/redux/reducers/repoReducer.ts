import initUserState from "../../initialStates/usersInitialState";
import { actionTypes } from "../constants/action-types";

export const repoReducer = (state=[], action:any) =>{
switch (action.type) {
    case actionTypes.SET_REPOSITORIES:
        return {
            ...state,
            repos:action.payload
        }  
        case actionTypes.GET_REPOSITORIES:
        return {
            ...state,
            repos:action.payload
        }    
    default:
        return state;
}
    
}