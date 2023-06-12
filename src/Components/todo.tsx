import { useState } from "react";
import { updateTodo } from "../apis";
import { TodoListData } from "../pages/todoPage";

export default function ToDo({ props }: { props: TodoListData }) {
    const { id, todo, isCompleted, userId } = props
    const [isChcecked, setIsChecked] = useState(isCompleted)

    const checkHandler = () => {
        setIsChecked(!isChcecked)
        updateTodo(id, todo, !isChcecked)
    }

    return (
        <li>
            <label>
                <input type="checkbox" checked={isChcecked} onChange={checkHandler} />
                <span>{todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
        </li>
    )
}