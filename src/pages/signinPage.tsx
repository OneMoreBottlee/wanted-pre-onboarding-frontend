import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { signin } from "../apis";

import { Sign } from "../style/signPage.style";

export default function SignInPage() {
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
        if (token !== undefined) {
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
    }, [navigate])

    // css 용 코드
    useEffect(() => {
        document.querySelectorAll('label').forEach(label => {
            label.innerHTML = label.innerText.split("").map((letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`).join('')
        })
    }, [])

    return (
        <Sign>
            <button onClick={() => navigate("/")}>🏠</button>
            <form onSubmit={signinHandler}>
                <h2>Sign IN</h2>
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
                        ? <button data-testid="signup-button">Sign In</button>
                        : <button disabled data-testid="signin-button" style={{cursor: "default"}}>내용을 적으세요</button>}
                </div>
                <p>Make New Account ? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
            </form>
        </Sign>
    )
}