import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logov.png'
import { ActiveLink } from '../ActiveLink';



export function Header() {
    return(
        <div className={styles.headerContainer}>
            <div className={styles.headerContent}>
                
                <ActiveLink href='/' activeClassName={styles.active}>
                <a>
                    <Image src={logo} alt='Imagem Logo' />
                </a>
                    
                </ActiveLink>

                <nav>
                    <ActiveLink href='/' activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                </nav>

                <nav>
                    <ActiveLink href='/posts' activeClassName={styles.active}>
                        <a>Conteúdos</a>
                    </ActiveLink>
                </nav>

                <nav>
                    <ActiveLink href='/sobre' activeClassName={styles.active}>
                        <a>Quem Somos</a>
                    </ActiveLink>
                </nav>

                <a type='button' className={styles.readyButton} href='https://google.com.br'>Começar</a>

            </div>
            
        </div>
    )
}