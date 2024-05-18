import styles from "./Navbar.module.css"
// import logo from './images/logo.png'
export default function Navbar(){
    
    return (
    <header className={`${styles.header}`}>
        <nav className={styles.nav}>
            <img src="/images/logo.png" alt="" id={styles.logo} />
            <ul className={styles.ul}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}

