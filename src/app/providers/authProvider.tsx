import React, {createContext, FC, useContext, useMemo} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

export const AuthContext = createContext(null);

export const AuthProvider = (children: React.ReactNode) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    //TODO replace any
    const login = async (data:any) => {
        setUser(data);
        navigate("/profile");
    };

    const logout = () => {
        setUser(null);
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value.user}>{children}</AuthContext.Provider>;
};