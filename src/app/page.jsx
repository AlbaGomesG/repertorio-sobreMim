import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";

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
            <div className={styles.contact}>
              <Contact icon="linkedin" name="LinkedIn" url="https://www.linkedin.com/in/giovanna-alba-gomes-19403033b/?trk=opento_sprofile_pfeditor" />
              <Contact icon="github" name="GitHub" url="https://github.com/AlbaGomesG" />
              <Contact icon="mail" name="E-mail" url="mailto:giovanna.a.gomes6@aluno.senai.br" />
            </div>
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
            <div className={styles.skillsInformation}>
              <h3 className={styles.titleSkills}>🌆 Front-End</h3>
              <p className={styles.information}><strong className={styles.bold}>Linguagens e Tecnologias:</strong> HTML5, CSS3, JavaScript, XML</p>
              <p className={styles.information}><strong className={styles.bold}>Frameworks e Bibliotecas:</strong> React, Next.js, React Native, Expo Go</p>
              <p className={styles.information}><strong className={styles.bold}>Desenvolvimento Web e Mobile:</strong> Web Apps, Responsividade, Consumo de API (Geolocation, Câmera)</p>
              <p className={styles.information}><strong className={styles.bold}>Outros Conceitos:</strong> UX/UI Design, Acessibilidade</p>
            </div>

            <div className={styles.skillsInformation}>
              <h3 className={styles.titleSkills}>⚙️ Back-End</h3>
              <p className={styles.information}><strong className={styles.bold}>Linguagens e Frameworks:</strong> Node.js, Express</p>
              <p className={styles.information}><strong className={styles.bold}>APIs e Comunicação:</strong> REST, Swagger, Filtros (Query Params), Status Code HTTP, Protocolos de Comunicação</p>
              <p className={styles.information}><strong className={styles.bold}>Banco de Dados:</strong> SQLite, PostgreSQL, PG Admin 4</p>
              <p className={styles.information}><strong className={styles.bold}>SGBD e Modelagem:</strong> SGBD, Modelo Relacional, DCL, DDL, Funções SQL</p>
              <p className={styles.information}><strong className={styles.bold}>Arquitetura e Padrões:</strong> MVC, Programação Orientada a Objetos (POO)</p>
              <p className={styles.information}><strong className={styles.bold}>Ferramentas de Integração:</strong> Axios</p>
              <p className={styles.information}><strong className={styles.bold}>Conformidade e Segurança:</strong> LGPD</p>
            </div>

            <div className={styles.skillsInformation}>
              <h3 className={styles.titleSkills}>🧰 Ferramentas e Outros Conhecimentos</h3>
              <p className={styles.information}><strong className={styles.bold}>Controle de Versão:</strong> Git, GitHub</p>
              <p className={styles.information}><strong className={styles.bold}>Ambientes e Sistemas:</strong> Windows, Linux, Raspberry Pi</p>
              <p className={styles.information}><strong className={styles.bold}>IDE e Design:</strong> VS Code, Figma</p>
              <p className={styles.information}><strong className={styles.bold}>Testes e Qualidade:</strong> Postman, Insomnia, Teste de Software, Testes Manuais, Testes de Caixa Preta</p>
              <p className={styles.information}><strong className={styles.bold}>Metodologias e Gestão:</strong> Scrum, Kanban, Métodos Ágeis, Metodologias de Desenvolvimento, Levantamento de Requisitos, Documentação, Gerenciamento, Design Thinking, Apresentação de Projeto</p>
              <p className={styles.information}><strong className={styles.bold}>Infraestrutura e Automação:</strong> Equipamentos de Rede, Automação em IoT</p>
            </div>

          </div>
          <div className={styles.informationContent}>
            <h2 className={styles.title}>🔗 Projetos Práticos</h2>
            <p className={styles.information}><strong className={styles.bold}>🎬 Scene</strong> O Scene é uma plataforma web que tem como público alvo as pessoas apaixonadas por filmes - um espaço para explorar, descobrir e se encantar com filmes de diversos gêneros.</p>
            <Link href="https://github.com/AlbaGomesG/scene_projectFront" className={styles.link}>🔗 Ver Projeto</Link>
            <p className={styles.information}><strong>👽 Rick and Morty</strong> Esse projeto é uma plataforma web dedicada aos fãs do universo Rick and Morty - através do consumo da API oficial da série, o projeto permite descobrir informações detalhadas sobre cada personagem.</p>
            <Link href="https://rickandmorty-api-ten.vercel.app/home" className={styles.link}>🔗 Ver Projeto</Link>
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