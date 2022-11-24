import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Login} from "./app/widgets/login/login";
import {AuthLayout} from "./app/layouts/authLayout/authLayout";
import {MainLayout} from "./app/layouts/mainLayout/mainLayout";
import {Home} from "./app/pages/home/home";
import {ProtectedRoute} from "./app/components/protectedRoute/protectedRoute";
import {ChatBoard} from "./app/components/chatBoard/chatBoard";
import {Registration} from "./app/widgets/registration/registration";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "chat",
                element:
                    <ProtectedRoute>
                        <ChatBoard/>
                    </ProtectedRoute>
            }]
    }, {
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth",
                element: <Login/>
            },
            {
                path: "/registration",
                element: <Registration/>
            }]
    }

]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
