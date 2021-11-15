
import Link from "next/link"
import styles from "./MainNavigation.module.css"
import Image from "next/image"
import logoBlack from "../../public/images/logoBlack.png"
import freeDelivery from "../../public/images/free2.png"


const MainNavigation = () => {
    
    return (
        <header className={styles.header}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                <Image
                    src={logoBlack}
                    alt="Logo"
                    className={styles.logoBlack}
                /></div>
                      <div className={styles.secondImageContainer}>
        <div className={styles.freeDeliveryContainer}>
          <Image
          src={freeDelivery}
          alt="Logo"
          className={styles.freeDelivery}
        />
        
        </div>
      </div>
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