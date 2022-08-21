import initUserState from "../../initialStates/usersInitialState";
import { actionTypes } from "../constants/action-types";

export const userReducer = (state=initUserState, action:any) =>{
switch (action.type) {
    case actionTypes.SET_USERS:
        return {
            ...state,
            users:action.payload
        }  
        case actionTypes.GET_USERS:
        return {
            ...state,
            users:action.payload
        }    
    default:
        return state;
}
    
}