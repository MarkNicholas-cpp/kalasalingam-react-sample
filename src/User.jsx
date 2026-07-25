import { useParams } from "react-router-dom"

export default function User(){
    const {userId,name,age} = useParams();
    return <>
    <p>This is the user page user Id : {userId}</p>
    <p>name : {name}</p>
    <p>age : {age}</p>
    </>
}