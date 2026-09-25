import Image from "next/image";
import Container from "./components/page-container";
import Reveal from "./components/reveal";
import {
  IconArrowDown,
  IconBolt,
  IconCheck,
  IconDumbbell,
  IconFlame,
  IconMail,
  IconTarget,
  IconTrendingUp,
} from "./components/icons";
import styles from "./page.module.css";

const EMAIL = "michela.mancini@gmail.com";

const credentials = [
  "Istruttrice Boxe Thailandese Federkombat",
  "Asp. Tecnico Pugilato FPI",
  "Personal Trainer Certificato FIF",
  "Preparatrice Atletica FIF",
];

const services = [
  {
    title: "Lezioni private e personalizzate",
    description:
      "Percorsi su misura costruiti attorno ai tuoi obiettivi, al tuo livello e ai tuoi tempi.",
    icon: IconTarget,
  },
  {
    title: "Programmi di dimagrimento",
    description:
      "Allenamento e metodo per bruciare grassi in modo efficace e sostenibile nel tempo.",
    icon: IconFlame,
  },
  {
    title: "Allenamento funzionale",
    description:
      "Movimento reale per un corpo forte, mobile ed efficiente in ogni gesto quotidiano.",
    icon: IconBolt,
  },
  {
    title: "Tonificazione e ipertrofia",
    description:
      "Programmi mirati per costruire massa muscolare e definire ogni gruppo muscolare.",
    icon: IconDumbbell,
  },
  {
    title: "Sviluppo della forza",
    description:
      "Progressioni strutturate per aumentare forza, potenza e prestazione atletica.",
    icon: IconTrendingUp,
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.logo}>
            Michela <span>Mancini</span>
          </span>
          <a href={`mailto:${EMAIL}`} className={styles.headerCta}>
            <IconMail />
            Contattami
          </a>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <Image
            src="/images/pic_michi.jpg"
            alt="Michela Mancini in guardia durante un allenamento di boxe thailandese"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Muay Thai · Personal Training</p>
            <h1 className={styles.heroTitle}>
              Michela
              <br />
              <span className={styles.accent}>Mancini</span>
            </h1>
            <p className={styles.heroLead}>
              Allenamenti su misura per portare la tua boxe thailandese e la
              tua forma fisica al livello successivo.
            </p>
            <div className={styles.badgeRow}>
              {credentials.map((credential) => (
                <span className={styles.badge} key={credential}>
                  {credential}
                </span>
              ))}
            </div>
            <div className={styles.heroActions}>
              <a href={`mailto:${EMAIL}`} className={styles.btnPrimary}>
                <IconMail />
                Contattami
              </a>
              <a href="#servizi" className={styles.btnGhost}>
                Scopri i servizi
              </a>
            </div>
          </div>
          <span className={styles.scrollCue}>
            <IconArrowDown />
          </span>
        </section>

        <section className={`${styles.section} ${styles.about}`}>
          <Container>
            <Reveal>
              <p className={styles.sectionEyebrow}>Chi sono</p>
              <h2 className={styles.sectionTitle}>Metodo, disciplina, risultati</h2>
              <p className={styles.sectionLead}>
                Unisco la tecnica della boxe thailandese alla preparazione
                atletica per costruire allenamenti efficaci, sicuri e
                davvero su misura per te.
              </p>
            </Reveal>
            <div className={styles.credentials}>
              {credentials.map((credential, index) => (
                <Reveal key={credential} delay={index * 80}>
                  <div className={styles.credentialItem}>
                    <IconCheck className={styles.credentialIcon} />
                    <span className={styles.credentialText}>{credential}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="servizi" className={`${styles.section} ${styles.services}`}>
          <Container>
            <Reveal>
              <p className={styles.sectionEyebrow}>Servizi</p>
              <h2 className={styles.sectionTitle}>
                Allenamento su misura per te
              </h2>
            </Reveal>
            <div className={styles.serviceGrid}>
              {services.map(({ title, description, icon: Icon }, index) => (
                <Reveal key={title} delay={index * 70}>
                  <div className={styles.serviceCard}>
                    <span className={styles.serviceIcon}>
                      <Icon />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.banner}>
          <Image
            src="/images/pic_bw.jpg"
            alt="Allenamento con i guantoni al sacco"
            fill
            sizes="100vw"
            className={styles.bannerImage}
          />
          <div className={styles.bannerTint} />
          <div className={styles.bannerScrim} />
          <Reveal className={styles.bannerContent}>
            <p className={styles.bannerQuote}>
              La disciplina è il ponte tra{" "}
              <span>gli obiettivi</span> e i risultati.
            </p>
          </Reveal>
        </section>

        <section className={`${styles.section} ${styles.cta}`}>
          <Container>
            <Reveal>
              <p className={styles.sectionEyebrow}>Inizia oggi</p>
              <h2 className={styles.sectionTitle}>
                Pronta a salire di livello?
              </h2>
              <p className={styles.sectionLead}>
                Scrivimi per organizzare la tua prima lezione di prova e
                iniziare il tuo percorso.
              </p>
              <div className={styles.ctaActions}>
                <a href={`mailto:${EMAIL}`} className={styles.btnPrimary}>
                  <IconMail />
                  Contattami ora
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <Container>
          <p className={styles.footerLogo}>Michela Mancini</p>
          <p className={styles.footerMeta}>
            Boxe Thailandese · Personal Training · Preparazione Atletica
          </p>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Michela Mancini Fitness. Tutti i
            diritti riservati.
          </p>
        </Container>
      </footer>
    </>
  );
}
