import {Outlet} from "react-router-dom"
import styles from "../mainLayout/mainLayout.module.sass"
export const MainLayout = () => {
    return (<>

        <div className={styles.container}>
            <h1>Main Layout Header</h1>
            <Outlet/>
            <h1>Main Layout Footer</h1>
        </div>
    </>)
}