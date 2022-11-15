import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
    return (<>
        <h1>Auth Layout Header</h1>
        <Outlet/>
        <h1>Auth Layout Footer</h1>
    </>)
}