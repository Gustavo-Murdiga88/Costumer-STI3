import {AiFillFacebook , AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import { FaGlobeAmericas } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function Footer() {

    return (
        <footer className={styles.footerContent}>
            <div>
                <p>Não encontrou ajuda pela Cental de Ajuda? Fale com a gente pelo Chat!</p>

                    
                    <FaGlobeAmericas />

                    <AiFillFacebook />

                    <AiFillInstagram /> 
                    
                    <AiFillLinkedin />

                    <AiFillYoutube /> 

            </div>

        </footer >
    )
}