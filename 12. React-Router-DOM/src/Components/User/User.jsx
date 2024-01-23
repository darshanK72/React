import { useParams } from "react-router-dom"

function User(){
    const {userId} = useParams();

    return (
        <>
            <h1>This is User Page : {userId}</h1>
        </>
    )
}

export default User;