import instance from "../../userrequests/axios"
import requests from "../../userrequests/requests"
import { actionTypes } from "../constants/action-types"

export const setRepositories = (repoList:any)=>{
    return {
        type:actionTypes.SET_REPOSITORIES,
        payload:repoList
    }
}
export const getRepositories = (repoName:string)=>async (dispatch:any) => {
    const response =await instance.get(`${requests.getRepositories}?q=${repoName}`)   
    const payload = response?.data?.items
    console.log(payload, "getting pay");
    dispatch({type:actionTypes.GET_REPOSITORIES, payload:payload})
}