import styles from "./CardNoticias.module.scss";

interface CardNoticiasProps {
    noticiaPrincipal?: boolean;
    title: string,
    img:string,
    descricao:string,
    data: string
}

export function CardNoticias({noticiaPrincipal, img, title, descricao, data} :CardNoticiasProps){
    return(
        <div className={`${styles.cardNoticias} ${noticiaPrincipal ? styles.noticiaPrincipal : ''}`}>
            <div className={styles.imgNoticias}>
                <img src={img} alt="imagem" />
            </div>
            <h2>{title}</h2>
            <div className={styles.text}>
                <p>{descricao}</p>
                <p>{data}</p>
            </div>
        </div>
    )
}