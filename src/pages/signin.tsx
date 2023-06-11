const SignIn = () => {
    return <div>signin
        <input data-testid="email-input" />
        <input data-testid="password-input" />
        <button data-testid="signin-button" />
    </div>
}

export default SignIn;

// 1. 로그인 유효성 검사
// 1-1. 이메일 @ 포함
// 1-2. 비밀번호 8자 이상
// 1-3. 위 2개 통과 못할시 버튼 disabled

// 2. 로그인 버튼 클릭 후 정상 로그인시 todo 로 이동
// 2-1. 로그인 성공시 JWT를 받아 로컬 스토리지에 저장하기

// 3. 리다이렉트
// 3-1. 토큰이 있으면 todo로
// 3-2. 토큰이 없으면 회원가입으로