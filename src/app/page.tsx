import PageContainer from "./components/page-container";
import styles from "./page.module.css";

export default function Home() {
  return (
    <PageContainer >
      <main className={styles.main}>
        <div className={styles.name}>
          <h1>Michela Mancini Fitness</h1>
        </div>
        <div className={styles.details}>
          <p>
            Istruttrice Boxe Thailandese Federkombat
            <br />
            Asp. Tecnico Pugilato FPI <br />
            Personal Trainer Certificato FIF <br />
            Preparatrice Atletica FIF <br />
          </p>
        </div>
        <div>
          <a
            href="mailto:michela.mancini@gmail.com"
            className={styles.contactme}
          >
            Contattami
          </a>
        </div>
      </main>

      <div className={styles.services}>
        <p>
          Lezioni private e personalizzate
          <br />
          Programmi di dimagrimento
          <br />
          Allenamento funzionale
          <br />
          Tonificazione e ipertrofia
          <br />
          Sviluppo della forza
        </p>
      </div>
      <div className={styles.banner}></div>
    </PageContainer>
  );
}
