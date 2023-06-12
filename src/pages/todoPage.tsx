import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../apis";
import ToDo from "../Components/todo";

export default function TodoPage() {
    const [todoList, setTodoList] = useState<TodoListData[]>([])
    const [newTodo, setNewTodo] = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem("access_token")

    const updateList = async () => {
        const list = await getTodos()
        setTodoList(list)
    }

    const createHandler = async () => {
        const newToDo = await createTodo(newTodo)
        setTodoList((old) => [...old, newToDo])
    }

    const deleteHandler = (id: number) => {
        return async () => {
            await deleteTodo(id)
            const remainList = todoList.filter(todo => todo.id !== id)
            setTodoList(remainList)}
    }

    // 페이지 시작시
    useEffect(() => {
        // Todo 리스트 받아오기
        token ? updateList() : navigate("/signin")
    }, [])

    return (
        <>
            <button onClick={() => navigate("/")}>메인 이동</button>
            <div>To Do를 입력하세요
                <input data-testid="new-todo-input" onChange={(e) => setNewTodo(e.target.value)} />
                <button data-testid="new-todo-add-button" onClick={createHandler}>추가</button>
            </div>
            <div>To Do List</div>
            {todoList.map(el => {
                return <ToDo key={el.id} props={el} deleteHandler={deleteHandler} />
            })}
        </>
    )
}

export interface TodoListData {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}