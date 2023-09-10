import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
},[])

    return (
        <div className="">
            <h2>Users: {users.length}</h2>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}

// 1. state to hold data
// 2.use effect with dependency array
// 3. use fetch to load data #fetch
// 4. set loaded data sate #setUsers
