import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import Login from "./pages/user/Login";
import {ROUTERS} from './util/router';

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <Login />
        }
    ]
    return(
        <Routes>
            {
                userRouter.map((item,key) =>
                    (<Route key ={key} path={item.path} element = {item.component} />)
                )
            }
        </Routes>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;