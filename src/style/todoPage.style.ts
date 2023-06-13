import { styled } from "styled-components";

export const TodoSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #1c2630;
    
    > button {
        position: absolute;
        width: 70px;
        height: 70px;
        right: 5%;
        bottom: 5%;
        border-radius: 20px;
        background: white;
        font-size: 2em;
        cursor: pointer;
        
        &:hover {
            background: #2761F2;
            transition: 0.15s;
        }
    }

    > .createTodo {
        position: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        min-width: 800px;
        padding: 20px;
        border: 1px solid black;
        background: white;
        border-radius: 20px 20px 0 0;

        > h2 {
            font-size: 1.5em;
            font-weight: 900;
            margin-bottom: 10px;
        }
        > input {
            width: 80%;
            height: 2em;
        }
        > button {
            width: 10%;
            height: 2em;
        }
    }

    > .todoList{
        min-width: 800px;
        min-height: 600px;
        background-color: white;
        border-radius: 0 0 20px 20px;

        > h3 {
            font-size: 1.2em;
            font-weight: 700;
            margin-bottom: 10px;
        }

        list-style: none;
        padding: 20px 0 20px 30px;
    }
`