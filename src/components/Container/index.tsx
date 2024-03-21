import { ReactNode } from 'react';
import styles from "./Container.module.scss"

interface ContainerProps {
    children: ReactNode;
}

export function Container({children} :ContainerProps){
    return(
        <div className={styles.container}>
            <section className={styles.container}>
                {children}
            </section>
        </div>
    )
}