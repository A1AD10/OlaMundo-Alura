import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo excepturi blanditiis ducimus consectetur fugit, placeat quas dolor sequi rerum facilis nulla, alias sit, non provident. Corporis architecto quisquam nostrum.
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="um homem sentado"
                />
            </div>
        </div>
    )
}