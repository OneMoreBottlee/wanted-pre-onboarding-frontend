import { useState } from "react";
import { updateTodo } from "../apis";
import { TodoListData } from "../types/todo";

interface Props {
    props: TodoListData;
    deleteHandler: (id: number) => () => void;
}

export default function ToDo({ props, deleteHandler }: Props) {
    const { id, todo, isCompleted } = props
    const [isChcecked, setIsChecked] = useState(isCompleted)
    const [nowDo, setNowDo] = useState(todo)
    const [isEdit, setIsEdit] = useState(false)
    const [editTodo, setEditTodo] = useState(nowDo)
    const token = localStorage.getItem('access_token')

    const checkHandler = () => {
        setIsChecked(!isChcecked)
        updateTodo(token!, id, todo, !isChcecked)
    }

    const editHandler = () => {
        updateTodo(token!, id, editTodo, isChcecked)
        setNowDo(editTodo)
        setIsEdit(false)
    }

    return (
        <li>
            <label>
                <input type="checkbox" checked={isChcecked} onChange={checkHandler} />
                {isEdit
                    ? <input type="text" defaultValue={nowDo} data-testid="modify-input" onChange={(e) => setEditTodo(e.target.value)} />
                    : <span>{nowDo}</span>
                }
            </label>
            {
                isEdit
                    ? (
                        <>
                            <button data-testid="submit-button" onClick={editHandler}>제출</button>
                            <button data-testid="cancel-button" onClick={() => setIsEdit(false)}>취소</button>
                        </>
                    ) : (
                        <>
                            <button data-testid="modify-button" onClick={() => setIsEdit(true)}>수정</button>
                            <button data-testid="delete-button" onClick={deleteHandler(id)}>삭제</button>
                        </>
                    )}

        </li>
    )
}