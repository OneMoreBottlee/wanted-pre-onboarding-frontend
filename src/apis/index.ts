import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL

export const signup = async (email : String, password : String) => {
    try{
        const response = await axios.post('auth/signup', {email, password}, {headers: {"Content-Type": "application/json"}})
        const data = response

        return data
    }
    catch(error){
        console.log(error)
    }
}