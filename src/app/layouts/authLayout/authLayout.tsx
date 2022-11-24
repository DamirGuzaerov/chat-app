import {Outlet} from "react-router-dom";
import styles from "./authLayout.module.sass"

export const AuthLayout = () => {
    return (<>
        <div className={styles.container}>
            <Outlet/>
        </div>
    </>)
}