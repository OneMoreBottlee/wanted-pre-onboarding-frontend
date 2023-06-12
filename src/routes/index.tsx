import { Route, Routes as ReactRoutes } from "react-router-dom"
import Main from "../pages/main"
import SignIn from "../pages/signin"
import SignUp from "../pages/singup"
import Todo from "../pages/todo"

const Routes = () => {
    return (
        <ReactRoutes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/todo" element={<Todo />} />
        </ReactRoutes>
    )
}

export default Routes;