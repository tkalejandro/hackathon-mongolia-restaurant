
import Link from "next/link"
import styles from "./MainNavigation.module.css"
import Image from "next/image"
import logoBlack from "../../public/images/logoBlack.png"

const MainNavigation = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                <Image
                    src={logoBlack}
                    alt="Logo"
                    className={styles.logoOrange}
                /></div>
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNavList}>
                        <li className={styles.mainNavLinks}>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className={styles.mainNavLinks}>
                            <Link href='/order-online'>Order</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}


export default MainNavigation