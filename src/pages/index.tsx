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
        <section>
          <div className={styles.container}>
          <img className={styles.helloImg} src={HelloWorld} alt="HelloIMG"></img>
          <h1> Passionate. Creative. Love what I do. <br />  Let us get <span>creative</span>.</h1>
          <a className={styles.button} href="#">Talk to me! 👋 </a>
          </div>
        </section>
      </main>
    </>
  );
}