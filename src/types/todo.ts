export interface TodoListData {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

export interface Props {
    props: TodoListData;
    deleteHandler: (id: number) => () => void;
}