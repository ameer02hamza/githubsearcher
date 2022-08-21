import instance from "../../userrequests/axios"
import requests from "../../userrequests/requests"
import { actionTypes } from "../constants/action-types"

export const setUsers = (usersList:any)=>{
    return {
        type:actionTypes.SET_USERS,
        payload:usersList
    }
}
export const getUsers = (fullname:string)=>async (dispatch:any) => {
    const response =await instance.get(`${requests.getUsers}?q=fullname:${fullname}`)   
    const payload = response?.data?.items     
    dispatch({type:actionTypes.GET_USERS, payload:payload})
}