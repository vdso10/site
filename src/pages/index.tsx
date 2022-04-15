import Head from "next/head"
import styles from '../styles/home.module.scss'

import Image from "next/image"
import techsImage from '../../public/images/techs.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao proximo nível</h1>
            <span>Um plataforma de cursos que vão do zero até o profissional na prática, direto ao ponto sem enrolação.</span>
            <a>
              <button>
                COMEÇAR AGORA!
              </button>
            </a>           
          </section>

          <img
              src='/images/banner-conteudos.png'
              alt='Conteudos home'
          />
        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionMobile}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e Ios</h2>
            <span>Voce vai descobrir o jeito mais moderno de desnvolver app nativos para Ios e Android.</span>
          </section>

          <img
              src='/images/financasApp.png'
              alt='Conteudos Mobile'
            />

        </div>

        <hr className={styles.divisor}/>

        <div className={styles.sectionMobile}>

          <img
              src='/images/webDev.png'
              alt='Desenvolvimento apps web'
          />
          <section>
            <h2>Aprenda a criar Sistemas Web</h2>
            <span>Crias sistemas web utilizando as tecnologias mais modernas do mercado.</span>
          </section>                 
        </div>

        <div className={styles.footer}>
          <Image src={techsImage} alt='Tecnologias' />
          <h2>Mais de <span className={styles.alunos}>15 mil</span> já levaram sua carreira ao próximo nivel. Seja mais um a completar este time de vencedores!</h2>
          <span>E você vai perder esta oportunidade de evoluir?</span>
          <a>
            <button>INICIAR AGORA</button>
          </a>

        </div> 
      </main>
      
    
    </>
    
  )
}
