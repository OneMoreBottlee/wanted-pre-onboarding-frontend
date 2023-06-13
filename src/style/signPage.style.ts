import { styled } from "styled-components";

export const Sign = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #1c2630;

    > form {
        background: #29313c;
        padding: 60px 80px 60px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;

        > h2 {
            color: #fff;
            font-weight: 500;
            text-align: center;
            text-transform: uppercase;
            font-size: 1.5em;
            letter-spacing: 0.1em;
            margin-bottom: 50px;
        }

        > .inputBox {
            position: relative;
            width: 300px;
            margin-bottom: 40px;

            > input {
                position: relative;
                width: 100%;
                padding: 10px 0;
                background: transparent;
                border: none;
                border-bottom: 2px solid #999;
                outline: none;
                color: #fff;
                font-size: 1em;
                letter-spacing: 0.15em;

                &:focus ~ label span, &:valid ~ label span {
                    color: #2761F2;
                    letter-spacing: 0.15em;
                    transform: translateY(-25px);
                }

                &:focus, &:valid {
                    border-bottom: 2px solid #2761F2;
                }
            }

            > label {
                position: absolute;
                left: 0;
                padding: 10px 0;
                pointer-events: none;
                color: #999;
                text-transform: uppercase;

                > span {
                    position: relative;
                    display: inline-flex;
                    letter-spacing: 0.05em;
                    transition: 0.2s ease-in-out;
                }
            }

            > button {
                position: relative;
                width: 100%;
                padding: 15px;
                border-bottom: 2px solid #999;
                outline: none;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                background: #2761F2;
                border: none;
                border-radius: 50px;
                color: #fff;
                font-weight: 600;
                font-size: 1.15em;
                cursor: pointer;
                transition: 0.5s;

                &:hover {
                    letter-spacing: 0.35em;
                }
            }
        }

        > p {
            color: #fff;
            text-transform: uppercase;

            > a {
                color: #2761F2;
                font-weight: 500;
                text-decoration: none;
            }
        }

    }
`