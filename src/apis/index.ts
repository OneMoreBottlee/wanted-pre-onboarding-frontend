import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

export const signup = async (email : String, password : String) => {
    try{
        const response = await axios.post('auth/signup', {email, password}, {headers: {"Content-Type": "application/json"}})
        const data = response

        return data
    }
    catch(error){
        window.alert(`에러발생 !\n 계정 정보를 확인해주세요`)
    }
}

export const signin = async (email: string, password: string) => {
    try{
        const response = await axios.post('auth/signin', {email, password}, {headers: {"Content-Type": "application/json"}})
        const data = response.data.access_token

        return data
    }
    catch(error){
        window.alert(`에러발생 !\n 계정 정보를 확인해주세요`)
    }
}