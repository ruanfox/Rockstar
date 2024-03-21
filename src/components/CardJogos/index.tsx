import styles from "./CardJogos.module.scss"

interface CardJogosProps {
    img: string;
}

export function CardJogos({img}: CardJogosProps){
    return(
        <div className={styles.jogos}>
            <img src={img} alt="Imagem do jogo" />
        </div>
    )
}