import axios from "axios"
import React,  { useState, useEffect } from 'react';

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
                        <div>
                            <div>
                                {id+1}){userObj.name}
                            </div>
                            <img key={id} alt={`${id}th element`} src={photos[id].url}></img>
                        </div>
                        
                        )
                    })
                )
        }
      </div>
    );
}


export default Users;