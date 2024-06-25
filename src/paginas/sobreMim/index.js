import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.png"


export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá eu sou o Antônio!
            </h3>
            <img src={fotoSobreMim} alt="Foto de Antonio Evaldo" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed, nisi molestiae autem nesciunt assumenda. Numquam velit asperiores possimus qui cum iure in temporibus praesentium odit ipsam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed, nisi molestiae autem nesciunt assumenda. Numquam velit asperiores possimus qui cum iure in temporibus praesentium odit ipsam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed, nisi molestiae autem nesciunt assumenda. Numquam velit asperiores possimus qui cum iure in temporibus praesentium odit ipsam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed, nisi molestiae autem nesciunt assumenda. Numquam velit asperiores possimus qui cum iure in temporibus praesentium odit ipsam.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt exercitationem nemo itaque sed, nisi molestiae autem nesciunt assumenda. Numquam velit asperiores possimus qui cum iure in temporibus praesentium odit ipsam.
            </p>
        </PostModelo>
    )
}