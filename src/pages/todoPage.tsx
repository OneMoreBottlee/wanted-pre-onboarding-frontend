import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { createTodo, deleteTodo, getTodos } from "../apis";
import ToDo from "../Components/todo";
import { TodoListData } from "../types/todo";

const TodoSection = styled.section`
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

export default function TodoPage() {
    const [todoList, setTodoList] = useState<TodoListData[]>([])
    const [newTodo, setNewTodo] = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token")

    // 페이지 시작시
    useEffect(() => {
        // 토큰이 있다면 Todo 리스트 받아오기
        // 토큰이 없다면 로그인 페이지로 이동
        token ? updateList() : navigate("/signin")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 리스트 업데이트
    const updateList = async () => {
        const list = await getTodos(token!)
        setTodoList(list)
    }

    // 투두 생성
    const createHandler = async () => {
        const newToDo = await createTodo(token!, newTodo)
        setTodoList((old) => [...old, newToDo])
        setNewTodo("")
    }

    // 투두 삭제
    const deleteHandler = (id: number) => {
        return async () => {
            await deleteTodo(token!, id)
            const remainList = todoList.filter(todo => todo.id !== id)
            setTodoList(remainList)
        }
    }

    return (
        <TodoSection>
            <button onClick={() => navigate("/")}>🏠</button>
            <div className="createTodo">
                <h2>Make To Do</h2>
                <input data-testid="new-todo-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button data-testid="new-todo-add-button" onClick={createHandler}>추가</button>
            </div>
            <div className="todoList">
                <h3>To Do List</h3>
                {todoList.map(el => {
                    return <ToDo key={el.id} props={el} deleteHandler={deleteHandler} />
                })}
            </div>
        </TodoSection>
    )
}

