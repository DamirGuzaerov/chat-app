import {IButtonProps} from "../../../types";
import styles from "./button.module.sass"

export const Button = ({text}:IButtonProps) => {
  return(
      <>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>
              {text}
          </button>
      </>
  )
}