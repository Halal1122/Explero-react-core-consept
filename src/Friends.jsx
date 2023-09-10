import Friend from './Friend'
import './Friend.css'
import { useEffect, useState } from "react"

export default function Friends(){
    const [friends, setFriend]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setFriend(data))
    },[])

    return(
        <div className="box">
            <h2>Friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}
// 1. state to hold data #const [,]= usState()
// 2. use effect with dependency array
// 3. use fa