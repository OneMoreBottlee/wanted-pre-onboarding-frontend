import axios from "axios";
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

// 1. 회원가입 유효성 검사
// 1-1. 이메일 @ 포함
// 1-2. 비밀번호 8자 이상
// 1-3. 위 2개 통과 못할시 버튼 disabled
// 2. 회원가입 버튼 클릭 후 정상 가입시 로그인 경로로 이동

// 3. 로그인 상태시 todo로 리다이렉트 시키기