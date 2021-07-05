import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav} id={"show"} >
          <a className={styles.logo} href="#">
            adelon<span>medeiros</span>.
          </a>
          <div className={styles.menu}>
            <ul className={styles.grid}>
              <li><a className={styles.title} href="#home">Home</a></li>
              <li><a className={styles.title} href="#about">About</a></li>
              <li><a className={styles.title} href="#services">Services</a></li>
              <li><a className={styles.title} href="#projects">Projects</a></li>
              <li><a className={styles.title} href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className={styles.open}>...</div>
          <div className={styles.close}>x</div>

        </nav>
      </div>

      <div className={styles.dividerHeader}></div>

    </header>
  );
}
