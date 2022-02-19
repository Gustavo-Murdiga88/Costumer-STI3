import styles from './styles.module.scss'

import Image from 'next/image'
import init from '../../../public/assets/inicio.png'
import equip from '../../../public/assets/equipamentos.png'
import integrations from '../../../public/assets/integracoes.png'
import install from '../../../public/assets/instalacao.png'
import questions from '../../../public/assets/FAQ.png'
import version from '../../../public/assets/Versoesdoproduto.png'
import any from '../../../public/assets/any.png'
import logo from '../../../public/assets/logo.png'


export default function Main() {

    return (
        <>
            <main className={styles.Main}>
                <header className={styles.title}>
                    <h1>Como podemos te ajudar hoje?</h1>
                    <h3>Procure sua dúvida pelo <strong>campo de busca</strong> ou pelos <strong>atalhos</strong></h3>
                </header>

                <hr />

                <div className={styles.content}>
                    <a href="https://atendimento.sti3.com.br/kb/pt-br/article/127904/bem-vindo-a-central-de-ajuda?menu=inicio" >
                        <div className={styles.body}>

                            <Image src={init} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Inicio | Todas as opções</strong>
                        </div>
                    </a>
                    <a href="https://atendimento.sti3.com.br/kb/pt-br/article/128180/equipamentos?menu=equipamentos" >
                        <div className={styles.body}>
                            <Image src={equip} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Equipamentos</strong>

                        </div>
                    </a>
                    <a href="https://atendimento.sti3.com.br/kb/article/220539/integracoes-como-funcionam?menu=integracoes" >
                        <div className={styles.body}>
                            <Image src={integrations} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Integrações</strong>

                        </div>
                    </a>
                    <a href="https://atendimento.sti3.com.br/kb/pt-br/article/128261/instalacao-atualizacao-e-manutencao?menu=instalacao" >
                        <div className={styles.body}>
                            <Image src={install} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Instlação e Manutenção</strong>

                        </div>
                    </a>
                    <a href="https://atendimento.sti3.com.br/kb/pt-br/article/127912/seja-bem-vindo-as-perguntas-frequentes?menu=faq" >

                        <div className={styles.body}>
                            <Image src={questions} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Perguntas frequentes</strong>

                        </div>
                    </a>
                    <a href="https://atendimento.sti3.com.br/kb/article/267472/novidades-da-versao-12-15?menu=versoes" >
                        <div className={styles.body}>
                            <Image src={version} alt="Inicial"
                                height={100}
                                width={100} />
                            <strong>Versões dos Produtos</strong>

                        </div>
                    </a>
                </div>
            </main>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.contentCenter}>
                        <h2>Ainda com dúvidas? Chame no Chat!</h2>
                    </div>
                <a href="https://sti3sistemas.blob.core.windows.net/suporte/AnyDesk.exe" download>
                    <div className={styles.contentCenter}>
                        <Image src={any}
                            height={45}
                            width={45} />
                        <strong>AnyDesk</strong>
                    </div>
                </a>
                    <div className={styles.contentCenter}>
                        <p>E, se preciso, beixe as ferramentas de suporte remoto!</p>
                    </div>
                <a href="https://s3.amazonaws.com/movidesk-files/D0F46E2B34D60E696D61AC647460E9DD"> 
                    <div className={styles.contentCenter}>
                        <Image src={logo}
                            height={45}
                            width={45} />
                        <strong>MovieDesk</strong>
                    </div>
                </a>
                </div>
            </div>
        </>
    )
}