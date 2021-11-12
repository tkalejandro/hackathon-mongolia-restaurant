
import Link from "next/link"
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Stir It Up</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/order-online'>Order Online</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation