import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("/signin")}>로그인 이동</button>
        </div>
    )
}

export default Main;