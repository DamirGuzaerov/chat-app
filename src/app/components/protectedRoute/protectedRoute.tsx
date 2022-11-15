import {Navigate} from "react-router-dom";
import {useAuth} from "../../utils/hooks/useAuth";
import React from "react";

export const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
    const user = useAuth();
    if (!user) return <Navigate to={"/auth"}/>
    else
        return <>
            {children}
        </>
}