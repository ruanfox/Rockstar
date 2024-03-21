import { Button } from "../Button";
import styles from "./Header.module.scss";

import logo from "./images/Logo.svg";
import source from "./images/Icone pesquisar.svg";
import user from "./images/Icone login.svg";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.header1} >
                <div className={styles.part1}>
                    <Link to="/"><img src={logo} alt="logo" /></Link> 
                    <nav>
                        <Link className={styles.navs} to="/jogos">Jogos</Link>    
                        <Link className={styles.navs} to="/loja">Loja</Link>    
                        <Link className={styles.navs} to="/ajuda">Ajuda</Link>    
                    </nav>
                </div>
                <div className={styles.part2}>
                    <Button name="Baixe o Launcher"/>
                    <img src={source} alt="Procurar" />
                    <img src={user} alt="Usuario" />
                </div>
            </div>
        </header>
    )
}