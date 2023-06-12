import { useNavigate } from "react-router-dom";

export default function MainPage () {
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token")

    return (
        <div>
            {token === null ?
                <>
                    <button onClick={() => navigate("/signin")}>로그인 이동</button>
                    <button onClick={() => navigate("/signup")}>회원가입 이동</button>
                </>
                : <>
                    <button onClick={() => navigate("/todo")}>TODO 이동</button>
                    <button onClick={() => {
                        localStorage.removeItem("access_token")
                        window.location.reload()
                    }}>
                        토큰 삭제</button>
                </>
            }
        </div>
    )
}