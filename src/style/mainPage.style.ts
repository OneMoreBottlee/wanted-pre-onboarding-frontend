import styled from "styled-components";

export const MainSection = styled.section`
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