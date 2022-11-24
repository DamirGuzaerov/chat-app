import {Input} from "../../components/ui/input/input";
import {Button} from "../../components/ui/button/button";
import styles from "./login.module.sass"
import {NavLink} from "react-router-dom";

export const Login = () => {
    return (
        <div className={`${styles.container} ${styles.centered}`}>
            <header className={styles.header}>
                Login form header
            </header>
            <div>
                <h2>Sign In</h2>
            </div>
            <ul>
                <li>
                    <Input placeholder={"Your email"} type={"email"}/>
                </li>
                <li>
                    <Input placeholder={"Your password"} type={"password"}/>
                </li>
                <li>
                    <Button text={"Sign in"}/>
                </li>
            </ul>
            <footer>
                Not registered? Go to <NavLink to={"/registration"}>registration page</NavLink>
            </footer>
        </div>
    )
}