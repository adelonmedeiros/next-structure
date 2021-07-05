import Head from "next/head";
import styles from "./home.module.scss";
import HelloWorld from "../assets/images/HelloWorld.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>OriginNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.image}>
              <img className={styles.helloImg} src={HelloWorld} alt="HelloImg"></img>
            </div>
            <div className={styles.text}>
              <h2 className={styles.title}> Passionate. Focused. Love what I do. <br />  Let us get <span>creative</span>.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a className={styles.button} href="#">Talk to me! 👋 </a>
            </div>
          </div>
        </section>

        <div className={styles.divider1}></div>

        <section className={styles.section} id={"home"}>
          <div className={styles.containerGrid}>Home
          </div>
        </section>

        <section className={styles.section} id={"about"}>
          <div className={styles.containerGrid}>About
          </div>
        </section>

        <section className={styles.section} id={"services"}>
          <div className={styles.containerGrid}>Services
          </div>
        </section>

        <section className={styles.section} id={"projects"}>
          <div className={styles.containerGrid}>Projects
          </div>
        </section>

        <section className={styles.section} id={"contact"}>
          <div className={styles.containerGrid}>Contact
          </div>
        </section>

      </main>
    </>
  );
}
