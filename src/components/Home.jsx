import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomPageLoader from '../components/CustomPageLoader'
import AddUser from '../components/AddUser'
import Employe from '../components/Employe'


export default function Home() {
    const [posts, setPost] = useState([]);

    const [pageLoader, setPageLoader] = useState(false);

    
    useEffect(() => {
        loadPost();

    }, [])

    const loadPost = async () => {
        setPageLoader(true)
        const result = await axios.get(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=admin`);
        setPost(result.data);
        setPageLoader(false)
    }
    

    const deleteUser = async id => {
        await axios.delete(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`)
        loadPost()
    }

    return (
        <>
        <div className="area">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="col-lg-12">
                        <div className="area-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>User List</h2>
                                </div>
                                <div className="col-md-6 text-right">
                                    <AddUser />
                                </div>
                            </div>
                            <div className="row mt-5">
                            <div className="d-flex align-items-start">
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Admin</button>
                                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Employe</button>
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">

                                    <>
                                        <CustomPageLoader pageLoader={pageLoader} />
                                        <table className='table table-bordered'>
                                            <tbody>

                                            
                                        {
                                            posts.map((post,idx) => (
                                                
                                                    <tr> 
                                                        <td>{post.id}</td>
                                                        <td>{post.first_name}</td>
                                                        <td>{post.last_name}</td>
                                                        <td>{post.user_type}</td>
                                                        <td><button className='btn btn-primary'>View</button>
                                                            <button onClick={() => deleteUser(post.id)} className='btn btn-danger'>Delete</button>
                                                        </td>
                                                    </tr>

                                                
                                                
                                            ))
                                        }
                                        </tbody>
                                        </table>
                                        </>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                        <CustomPageLoader pageLoader={pageLoader} />
                                        <Employe />

                                    </div>
                                </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
