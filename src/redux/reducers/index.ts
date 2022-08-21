import { combineReducers } from "redux";
import { repoReducer } from "./repoReducer";
import { userReducer } from "./userReducers";

const reducers = combineReducers({
    allUsers:userReducer,
    allRepos:repoReducer
})

export  default reducers;