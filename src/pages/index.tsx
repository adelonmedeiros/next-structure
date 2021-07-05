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
              <h1> Passionate. Creative. Love what I do. <br />  Let us get <span>creative</span>.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <a className={styles.button} href="#">Talk to me! 👋 </a>
            </div>
          </div>
        </section>

      <div className={styles.divider1}></div>

      </main>
    </>
  );
}
