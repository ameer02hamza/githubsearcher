import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../componentstylesheets/searchbar.scss'
import { getRepositories } from '../redux/actions/repoAction';
import { getUsers } from '../redux/actions/userActions';
import { useAppDispatch } from '../redux/hooks';
import Repositories from './Repositories';
import Users from './Users';

function SearchBar() {
    const [searchCategory, setsearchCategory] = useState("users")
    const dispatch = useAppDispatch();
    const setCategory = (event:any) =>{
        const category = event.target.value
        setsearchCategory(category) 
        console.log(searchCategory,"searc");
        
    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const searchValue = event.target.value
        if(searchValue.length>=3){
            searchCategory=="users"?dispatch(getUsers(searchValue)):dispatch(getRepositories(searchValue))
        }       
    }
    useEffect(() =>{
    },[])
    return (
        <>
        <div className='searchbar-main-content'>
            <div className='searchbar-sub-content'>
                <div className='logo'>
                    <img src="/assests/images/logo.png" width={30} alt="Github" />
                </div>
                <div>
                    <h3 className='header'>Github Searcher</h3>
                    <p className='subheader'>Search users or repositories below</p>
                </div>
            </div>
            <div className='searchbar-searcharea'>
                <input name="fullname" onChange={handleChange} type="text" placeholder='Start typing to search ......'
                 className='search-box' />
                <select className='searchbar-select' onChange={setCategory} name="" id="">
                    <option value="users">Users</option>
                    <option value="repositories">Repositories</option>
                </select>
            </div>
        </div>
        {
            searchCategory=="users"? <Users/>:<Repositories />
        }
        </>
    )
}

export default SearchBar