import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function User() {
    const { id, max } = useParams();
    const [photo, setPhoto] = useState();
    const [user, setUser] = useState();

    console.log(id)
    console.log(max)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => {
            setPhoto(res.data)
        })
        
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            setUser(res.data)
        })
            
    }, [id, max])
    return (
        <div>
            <h2>{user===undefined ? <div>Loading!!!</div> : user.name}</h2>
            <Link to={(id >= 2) ? `/user/${parseInt(id)-1}-${parseInt(max)}` : `#`}>Previous User</Link>
            {
              photo === undefined ? <div>Loading!!!</div> :  
                <img alt={`${id}th element`} src={photo.url}></img> 
            }
            <Link to={(parseInt(id) < parseInt(max)) ? `/user/${parseInt(id)+1}-${parseInt(max)}` : `#`}>Next User</Link>
        </div>
    );
    
}

export default User;