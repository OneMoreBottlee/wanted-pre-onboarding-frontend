import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../image/wantedLogo.svg";

const MainSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {
        width:20%;
        margin: 2% 0;
    }

    > div {
        width: 20%;
        height: 30%;
        display: flex;
        flex-direction: row;

        margin-top: 20px;

        > button {
            width: 50%;
            height: 30%;
            font-size: 20px;
            color: white;
            font-weight: bold;
            background-color: #2761F2;
            border: none;
            border-radius: 50px;
            cursor: pointer;

            &:hover{
                background-color: white;
                color: #2761f2;
                border: 1px solid #2761f2;
                transition: all 0.2s;
            }
        }
    }
`

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