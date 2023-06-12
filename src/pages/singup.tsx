import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../apis";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false);
    const navigate = useNavigate();

    // 회원가입
    const signupHandler = (event: any) => {
        event.preventDefault()
        signup(email, password)
        navigate('/signin')
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
        <form onSubmit={signupHandler}>signup
            <input data-testid="email-input" onChange={(e) => setEmail(e.target.value)} />
            <input data-testid="password-input" onChange={(e) => setPassword(e.target.value)} />
            {validate
                ? <button style={{ height: "20px" }} data-testid="signup-button">Sign</button>
                : <button disabled style={{ height: "20px" }} data-testid="signup-button">Sign</button>}
        </form>
    )
}

export default SignUp;