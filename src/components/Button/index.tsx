import styles from "./Button.module.scss"

interface ButtonProps {
    name: string
}
export function Button({name}: ButtonProps){
    return(
        <button className={styles.button}>
            {name}
        </button>
    )
}