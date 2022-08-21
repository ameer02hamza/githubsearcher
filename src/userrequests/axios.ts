import axios from "axios";
/**
 * @github access token for the authorization of api request
 * @instance is to create base url and header for every api call will being made
 */
const gitHubAccessToken = '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';
const instance = axios.create({
   baseURL:"https://api.github.com/search/",
    headers:{
        Authorization:`token ${gitHubAccessToken}`
    }
})
export default instance;