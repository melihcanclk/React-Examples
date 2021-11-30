import axios from "axios"
import React,  { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";

function Users() {

    const [users, setUsers] = useState();
    const [photos, setPhotos] = useState();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data)
        })
        axios("https://jsonplaceholder.typicode.com/photos")
        .then((res) => {
            setPhotos(res.data)
        })
    }, [])

    return (
      <div>
        <h2>Users</h2>
        {
            (users && photos) === undefined ? 
                (
                    <div>
                        Loading!!!
                    </div> 
                ) : 
                ( 
                    users.map((userObj, id) => {
                        return (
                        <div key={id}>
                            <Link to={`/user/${id+1}-${users.length}`} >
                                <div>
                                    {id+1}){userObj.name}
                                </div>
                            </Link>
                        </div>
                        
                        )

                    })
                )
        }
      </div>
    );
}


export default Users;