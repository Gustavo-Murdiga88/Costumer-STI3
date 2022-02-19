import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/assets/logo-sti3.png'
import search from '../../../public/assets/search.svg'
export default function Header() {

    return (
        <>
            <head>
                <title>Central de ajuda - STi3 </title>
            </head>
            <header className={styles.header}>
                <div>
                    <aside className={styles.asideLeft}>
                        <Image className='logo-sti3' src={logo} alt="Logo STI3"
                            height={30}
                            width={91}
                        />
                        <span><p>Central de ajuda</p></span>
                    </aside>
                    <aside className={styles.asideRight}>
                        <input type="seach" placeholder="Pesquise aqui!" />
                        <button type="reset"> 
                            <Image src={search} alt="Font search"
                                height={15}
                                width={15}
                            /> 
                        </button>
                    </aside>
                </div>
            </header>
        </>
    )
}