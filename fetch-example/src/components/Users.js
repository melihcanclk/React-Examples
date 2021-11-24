import styles from "./styles.module.css"
import { useEffect, useState } from "react";


function Users() 
{
    const [photos, setPhotos] = useState();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setPhotos(data))
    }, [])
        
    console.log(photos && photos[0].url)
    return(
        <div className={styles.title}>
            {
                photos && photos.map((elem) => (
                    <img src={elem.url} />
                ))
            }
        </div>
     );
}

export default Users;