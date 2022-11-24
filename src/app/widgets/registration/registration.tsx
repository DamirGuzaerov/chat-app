import {Input} from "../../components/ui/input/input";
import {Button} from "../../components/ui/button/button";
import styles from "./registration.module.sass"

export const Registration = () => {
    return (
        <div className={`${styles.container} ${styles.centered}`}>
            <header className={styles.header}>
                Registration form header
            </header>
            <div>
                <h2>Welcome to chat-app!</h2>
            </div>
            <ul>
                <li>
                    <Input placeholder={"Your login"} type={"text"}/>
                </li>
                <li>
                    <Input placeholder={"Your email"} type={"email"}/>
                </li>
                <li>
                    <Input placeholder={"Your password"} type={"password"}/>
                </li>
                <li>
                    <Input placeholder={"Repeat password"} type={"password"}/>
                </li>
            </ul>
            <Button text={"Sign up"}/>
            <footer>
                Registration form footer
            </footer>
        </div>
    )
}