import TextInput from '../components/TextInput'
import React, {useState} from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";

import { State }  from 'country-state-city';
import CustomPageLoader from '../components/CustomPageLoader'


export default function AddUser() {

    // const county = Country.getAllCountries()
    const state = State.getAllStates()
    // const city = City.getAllCities()
    
    const [pageLoader, setPageLoader] = useState(false);

    let dist = []
    for (let key in state) {
        if(state[key].countryCode === "BD"){
            dist.push(state[key].name)
        }
        // console.log(key, state[key].name);
    }

    const getDiv = State.getStatesOfCountry("BD").filter((dataItem)=> {
        if (dataItem.name.includes("Division")) return true;
    })


    const history = useNavigate();
    const [post,setPost] = useState({
        first_name: '',
        last_name: '',
        user_type: '',
        district:''
    })
    const {first_name, last_name} = post;
    const onInputChange = e => {
        setPost({...post,[e.target.name]: e.target.value });
    }
    const onSubmitFrom = async e => {
        console.log(post)
        e.preventDefault();
        await axios.post('https://60f2479f6d44f300177885e6.mockapi.io/users',post)
        history('/');
        setPageLoader(false)
    }

    return (
        <>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adduser">Add User</button>
            <div className="modal fade" id="adduser" aria-labelledby="adduserLabel" aria-hidden="true">
            <CustomPageLoader pageLoader={pageLoader} />
                <div className="modal-dialog add-new-user">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="adduserLabel">Add New User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={e=> onSubmitFrom(e)}>
                            <TextInput onChange={e => onInputChange(e)} value={first_name} type="text"  name="first_name" id="fname" label="First Name" placeholder="First Name" />
                            <TextInput onChange={e => onInputChange(e)} value={last_name} type="text" name="last_name" id="lname" label="Last Name" placeholder="Last Name" />


                            <div className="input-group mb-3">
                                <label htmlFor="role">User Role</label>
                                <select onChange={e => onInputChange(e)} className="form-select" name="user_type">
                                    <option value="admin">Admin</option>
                                    <option value="employe">Employe</option>
                                </select>
                            </div>


                            {/* {
                                JSON.stringify(post)
                            }
                             */}
                            {post.user_type=== 'employe' ? 
                            <>
                            <div className="input-group mb-3">
                                    <label htmlFor="division">Division</label>
                                    <select onChange={e => onInputChange(e)} name="division" className="form-select">

                                    {getDiv.map((dataa,index)=>{
                                        return(
                                            <option value={dataa.name}>
                                                {dataa.name}
                                            </option>
                                        )
                                    })}
                                        
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <label htmlFor="district">District</label>
                                    <select onChange={e => onInputChange(e)} name="district" className="form-select">

                                    {dist.map((data,index) => {
                                        return(
                                            <option value={data} key={index}>
                                                {data}
                                            </option>
                                        )
                                    })}
                                        
                                    </select>
                                </div>
                            </>
                                

                            : 'no' }
                            
                            
                            <div className="input-group mb-3">
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



