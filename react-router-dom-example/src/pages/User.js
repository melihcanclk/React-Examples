import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./User.css";


function User() {
    let { id, max } = useParams();
    const [photo, setPhoto] = useState();
    const [user, setUser] = useState();
    id = parseInt(id);
    max= parseInt(max);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => {
            setPhoto(res.data)
        })
        
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            setUser(res.data)
        })
            
    }, [id])
    return (

        (user === undefined ||photo === undefined) ? (<div>Loading!!!</div>) : (
            <div>
                <div>
                    <h2>{user.name}</h2>
                    {
                        <img alt={`${id}th element`} src={photo.url}></img> 
                    }
                    <div>
                        {user.phone}
                    </div>
                    <div>
                        {(id >= 2) ? <Link className={"next-prev-buttons prev round"} to={`/user/${id-1}-${max}`}>Previous User</Link> : <Link to={"#"}style={{paddingLeft: "127.75px"}}></Link>}
                        {(id < max) ? <Link className={"next-prev-buttons next round"} to={`/user/${id+1}-${max}`}>Next User</Link> : <Link to={"#"}style={{paddingLeft: "101.2px"}}></Link>}    
                    </div>
                </div>
                
            </div>
        )
    );
    
}

export default User;