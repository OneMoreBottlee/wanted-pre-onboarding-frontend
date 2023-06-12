import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../apis";

export default function SignInPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false);
    const navigate = useNavigate();

    // 로그인
    const signinHandler = async (event: any) => {
        event.preventDefault()
        const token = await signin(email, password)

        // 정상 로그인(토큰 값이 포함된 경우)인 경우
        // 로컬 스토리지에 토큰을 저장하고, todo로 이동한다.
        if(token !== undefined){
            localStorage.setItem("access_token", token)
            navigate('/todo')
        }
    }

    // validate
    // ID @ 포함 & PW 8자 이상
    useEffect(() => {
        (email.includes("@") && password.length >= 8) ? setValidate(true) : setValidate(false)
    }, [email, password])

    // 로그인 여부에 따른 리다이렉트 - 토큰이 있으면 TODO 로 이동
    useEffect(() => {
        const token = localStorage.getItem("access_token")
        if (token) navigate("/todo")
    }, [])

    return (
        <form onSubmit={signinHandler}>signin
            <input data-testid="email-input" onChange={(e) => setEmail(e.target.value)} />
            <input data-testid="password-input" onChange={(e) => setPassword(e.target.value)} />
            {validate
                ? <button style={{ height: "20px" }} data-testid="signup-button">Sign</button>
                : <button disabled style={{ height: "20px" }} data-testid="signin-button">Sign</button>}
        </form>
    )
}