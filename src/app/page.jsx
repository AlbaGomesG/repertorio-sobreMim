import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <Image src="/images/profile.png" alt="Foto de Perfil" width={120} height={120} className={styles.profileImage} />
          </div>
          <div className={styles.information}>
            <h2 className={styles.title}>Giovanna Alba Gomes</h2>
            <p className={styles.contact}>📞 (19) 99118-5002</p>
            <p className={styles.contact}>✉️ albagomesg@gmail.com</p>
          </div>
        </div>
        <div className={styles.contentInformation}>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>🎯 Objetivo Profissional</h2>
            <p className={styles.information}>Busco minha primeira oportunidade como Desenvolvedora Full Stack Júnior, aplicando meus conhecimentos em JavaScript, Node.js e React, e aprimorando minhas habilidades no desenvolvimento de aplicações web modernas.</p>
          </div>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>🎓 Formação</h2>
            <p className={styles.informationBold}>Curso Técnico em Desenvolvimento de Sistemas no SENAI</p>
            <p className={styles.information}> 📅 Conclusão prevista: Dezembro/2025</p>
          </div>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>💻 Habilidades Técnicas</h2>
            <p className={styles.information}><strong className={styles.bold}>Front-End:</strong> HTML5, CSS3, JavaScript, React, Next.js</p><p className={styles.information}><strong className={styles.bold}>Back-End:</strong> Node.js, Express, APIs REST, SQLite, PostgreSQL</p><p className={styles.information}><strong className={styles.bold}>Ferramentas:</strong> Git, GitHub, VS Code, Figma, Postman</p>
          </div>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>🔗 Projetos Práticos</h2>
            <p className={styles.information}><strong className={styles.bold}>🎬  Scene – Sistema tipo iFood (Node.js + React + PostgreSQL)</strong> O Scene é uma plataforma web que tem como público alvo as pessoas apaixonadas por filmes - um espaço para explorar, descobrir e se encantar com filmes de diversos gêneros.</p>
            <Link href="https://github.com/AlbaGomesG/scene_projectFront" className={styles.link}>🔗 Ver Projeto</Link>
          </div>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>🌐 Soft Skills</h2>
            <p className={styles.information}>- Facilidade em aprender novas tecnologias</p>
            <p className={styles.information}>- Boa comunicação e colaboração em equipe</p>
            <p className={styles.information}>- Organização e foco em resultados</p>
            <p className={styles.information}>- Curiosidade técnica e resolução de problemas</p>
          </div>
        </div>
      </div>
    </div>
  )
}