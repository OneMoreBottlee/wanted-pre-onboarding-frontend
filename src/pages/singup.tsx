import { useRef } from "react";
import { signup } from "../apis";

const SignUp = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const submitHandler = (event: any) => {
        event.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        console.log(email, password)
    }

    return (
        <form onSubmit={submitHandler}>signup
            <input data-testid="email-input" ref={emailRef}/>
            <input data-testid="password-input" ref={passwordRef}/>
            <button data-testid="signup-button">Sign</button>
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