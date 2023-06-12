import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

// 1. Auth 관련
// 1-1. SignUp - 회원가입
export const signup = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "auth/signup",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = response;

    return data;
  } catch (error) {
    window.alert(
      `회원 가입 실패 !\n ID는 @ 포함, PW는 8자리 이상이어야 합니다.`
    );
  }
};

// 1-2. SignIn - 로그인
export const signin = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "auth/signin",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    const data = response.data.access_token;

    return data;
  } catch (error) {
    window.alert(`로그인 실패 !\n 계정 정보를 확인해주세요`);
  }
};

// 2. ToDo 관련
// 2-1. createTodo - Todo 생성
export const createTodo = async (todo: string) => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axios.post(
      "/todos",
      { todo },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    window.alert(`에러 발생 !\n새로운 ToDo를 추가할 수 없습니다.`);
  }
};

// 2-2. getTodo - Todo 리스트
export const getTodos = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axios.get("todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const todos = response.data;
    return todos;
  } catch (error) {
    window.alert(`에러 발생 !\n현재 Todo 리스트를 가져올 수 없습니다.`);
  }
};

// 2-3. updateTodo - Todo 수정
export const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
    const token = localStorage.getItem("access_token")
    const data = {todo, isCompleted}
    try{
        const response = await axios.put(`/todos/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }})
        
        return response.data
    }catch(error){
        window.alert(`에러 발생 !`)
    }
}

// 2-4. deleteTodo - Todo 삭제
export const deleteTodo = async (id: number) => {
    const token = localStorage.getItem("access_token")
    const confirm = window.confirm(`정말 삭제하시겠습니까? 복원은 안돼요 !`)
    if(confirm){
        await axios.delete(`/todos/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    }
}