import { Route, Routes as ReactRoutes } from "react-router-dom"
import Main from "../pages/mainPage"
import SignIn from "../pages/signinPage"
import SignUp from "../pages/singupPage"
import Todo from "../pages/todoPage"

export default function Routes () {
    return (
        <ReactRoutes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/todo" element={<Todo />} />
        </ReactRoutes>
    )
}