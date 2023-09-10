export default function User({user}){
    // console.log(User)
    // console.log(users)
    const{name, email}= user;
    return(
        <div>
            <h2>name: {name}</h2>
            <h3>Email: {email} </h3>
        </div>
    )
            
}