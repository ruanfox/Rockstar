import styles from "./Home.module.scss"
import { Button } from "../../components/Button";
import { CardJogos } from "../../components/CardJogos";
import { CardNoticias } from "../../components/CardNoticias";

import gtavi from "./image/GTA 6 banner.svg";
import gtav from "./image/GTA 5.svg";
import gtaOnline from "./image/GTA online.svg";
import red from "./image/RED.svg";
import redOnline from "./image/RED Online.svg";
import Rectangle24 from "./image/Rectangle 24.svg";
import Rectangle25 from "./image/Rectangle 25.svg";
import gta6 from "./image/GTA 6.svg"
import logo from "./image/Logo.svg"
import games from "./image/Games Launcher.svg"

export function Home(){
    return(
        <div className={styles.home}> 
            <section className={styles.img}>
                <img className={gtavi} src={gtavi} alt="Imagem do gtaVI" />
            </section>

            <section className={styles.destaque}>
                <div className={styles.title}>
                    <strong>Jogos em Destaque</strong>
                    <div className={styles.plataforma}>
                        <p className={styles.pc} >Pc</p>
                        <p className={styles.console} >Console</p>
                        <p className={styles.dispPortateis} >Dispositivos Portateis</p>
                    </div>
                </div>
                <div className={styles.cardDestaque}>
                    <CardJogos img={gtav}/>
                    <CardJogos img={gtaOnline}/>
                    <CardJogos img={red}/>
                    <CardJogos img={redOnline}/>
                </div>
                
                <Button name="Ver todos os jogos"/>
            </section>

            <section className={styles.noticias}>
                <strong>Útimas Noticias</strong>

                <div className={styles.cardNoticias}>
                    <CardNoticias noticiaPrincipal img={gta6} title="Grang Theft Auto VI - Veja o 1° trailer agora" descricao="Rockstar Games" data="5 de dezembro de 2023"/>
                    <CardNoticias img={Rectangle25} title="1° Trailer. Terça-feira, 5 de Dezembro. 9h Et." descricao="Rockstar Games" data="1 de dezembro de 2023" />
                    <CardNoticias img={Rectangle24} title="Nova atualização de GTA Online chegando em dezembrom" descricao="GTA Online" data="30 de dezembro de 2023" />
                </div>
            </section>

            <section className={styles.launcher}>
                <div className={styles.part1}>
                    <div className={styles.text}>
                        <img src={logo} alt="Logo da Rockstar" />
                        <h2>Games Lancher</h2>
                    </div>
                    <p className={styles.descricao} >Todos os seus jogos em um só lugar.</p>
                    <Button name="Download"/>
                </div>
                <div className={styles.part2}>
                    <img src={games} alt="image red dead" />
                </div>
            </section>
        </div>
    )
}