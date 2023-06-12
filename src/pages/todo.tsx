import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todo = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token")

    useEffect(()=>{
        if(!token)navigate("/signin")
    }, [])

    return (
        <>
            <div>todo지롱</div>
            <button onClick={() => navigate("/")}>메인 이동</button>
        </>
    )
}

export default Todo;