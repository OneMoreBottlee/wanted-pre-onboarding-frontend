import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signup } from "../apis";

import { Sign } from "../style/signPage.style";

export default function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validate, setValidate] = useState(false);
    const navigate = useNavigate();

    // 회원가입
    const signupHandler = async (event: any) => {
        event.preventDefault()
        const response = await signup(email, password)

        // 회원가입 성공한 경우, 로그인 페이지로 이동
        if (response?.status === 201) {
            navigate('/signin')
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
    }, [navigate])

    // css 용 코드
    useEffect(() => {
        document.querySelectorAll('label').forEach(label => {
            label.innerHTML = label.innerText.split("").map((letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`).join('')
        })
    }, [])

    return (
        <Sign>
            <form onSubmit={signupHandler}>
                <h2>Create Account</h2>
                <div className="inputBox">
                    <input type={"text"} required data-testid="email-input" onChange={(e) => setEmail(e.target.value)} />
                    <label>Email</label>
                </div>
                <div className="inputBox">
                    <input type={"password"} required data-testid="password-input" onChange={(e) => setPassword(e.target.value)} />
                    <label>Password</label>
                </div>
                <div className="inputBox">
                    {validate
                        ? <button data-testid="signup-button">Sign</button>
                        : <button disabled data-testid="signup-button">Sign</button>}
                </div>
                <p>Already have an account ? <span onClick={() => navigate('/signin')}>Sign In</span></p>
            </form>
        </Sign>
    )
}