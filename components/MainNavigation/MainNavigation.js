
import Link from "next/link"
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
            <div className={styles.logo}>Stir It Up</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/order-online'>Order</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default MainNavigation