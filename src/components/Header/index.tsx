import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <a className={styles.logo} href="#">adelonmedeiros.</a>
                    <div className={styles.menu}>
                        menu
                    </div>
                </nav>
                </div>
        </header>
    )
}
