import styles from "./Footer.module.scss"
import logo from "./image/Logo.svg"
import twitch from "./image/twitch.svg"
import instagram from "./image/instagram.svg"
import twitter from "./image/twitter.svg"
import youtube from "./image/youtube.svg"
import facebook from "./image/facebook.svg"

export function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer1}>
                <div className={styles.container}>
                    <img src={logo} alt="image logo" />
                    <div className={styles.text}>
                    <span className={styles.text1}>
                        <p>CONTATO</p>
                        <p>SOBRE</p>
                        <p>SUPORTE</p>
                        <p>EMPREGOS</p>
                    </span>
                    <span className={styles.text2}>
                        <p>©2023 Rockstar Games, Inc.    -    YWR Studio.  </p>
                    </span>
                </div>
                </div>
                <div className={styles.networks}>
                    <img src={twitch} alt="image twitch" />
                    <img src={instagram} alt="image instagram" />
                    <img src={twitter} alt="image twitter" />
                    <img src={youtube} alt="image youtube" />
                    <img src={facebook} alt="image facebook" />
                </div>
            </div>
        </div>
    )
}