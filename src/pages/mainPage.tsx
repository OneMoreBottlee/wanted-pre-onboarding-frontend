import { useNavigate } from "react-router-dom";

import { MainSection } from "../style/mainPage.style";
import Logo from "../image/wantedLogo.svg";

export default function MainPage() {
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token")

    return (
        <MainSection>
            <img src={Logo} alt={"wantedLogo"} />
            <div>
                {token === null ?
                    <>
                        <button onClick={() => navigate("/signin")}>로그인</button>
                        <button onClick={() => navigate("/signup")}>회원가입</button>
                    </>
                    : <>
                        <button onClick={() => navigate("/todo")}>TODO</button>
                        <button onClick={() => {
                            localStorage.removeItem("access_token")
                            window.location.reload()
                        }}>
                            로그아웃</button>
                    </>
                }
            </div>
        </MainSection>
    )
}