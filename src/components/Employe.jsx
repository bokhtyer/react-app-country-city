import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Employe() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        loadPost();

    }, [])
    const loadPost = async () => {
        const result = await axios.get(`https://60f2479f6d44f300177885e6.mockapi.io/users?user_type=employe`);
        setPost(result.data);
    }
    

    const deleteUser = async id => {
        await axios.delete(`https://60f2479f6d44f300177885e6.mockapi.io/users/${id}`)
        loadPost()
    }
    return (
        <table className='table table-bordered'>
            <tbody>
        <>
        {
            posts.map((post,idx) => (
                
                    <tr> 
                        <td>{post.id}</td>
                        <td>{post.first_name}</td>
                        <td>{post.last_name}</td>
                        <td>{post.user_type}</td>
                        <td>
                            <button className='btn btn-primary'>View</button>
                            <button onClick={() => deleteUser(post.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
            ))
        }
        </>
        </tbody>
        </table>
    )
}
