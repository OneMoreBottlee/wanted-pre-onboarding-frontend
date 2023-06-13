import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createTodo, deleteTodo, getTodos } from "../apis";
import ToDo from "../Components/todo";
import { TodoListData } from "../types/todo";

import { TodoSection } from "../style/todoPage.style";

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
        if(newTodo.length === 0)return
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

