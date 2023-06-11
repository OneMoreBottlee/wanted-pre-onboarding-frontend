import axios from 'axios'

axios.defaults.baseURL = process.env.SERVER_URL

export const signup = async (email : String, password : String) => {
    try{
        const response = await axios.post('auth/signup', {email, password})
        const data = response.status

        return data
    }
    catch(error){
        console.log(error)
    }
}