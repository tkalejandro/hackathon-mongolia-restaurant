
import styles from './Menu.module.css'
import Image from 'next/image'
import img from "../../images/mongoliabbq.jpeg"
import { restaurantMenu } from '../../public/Data/restaurantMenu'

const Menu = () => {
    //This will Loop all set menus that we want to put. No need to write more code.
    //To add more menu, please go to Public > Data > restaurantMenu.js
    let content = restaurantMenu.map((menu, index) => {
        return (
            <div key={index} className={styles.menuCard}>
                <Image
                    src={img}
                    alt={menu.title}
                />
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>
                    <span>{menu.subTitle}</span>
                    <p>{menu.protein}</p>
                    <span>+</span>
                    <p>{menu.veggies}</p>
                    <div>{menu.price}</div>
                </div>
                <button>Buy me!</button>
            </div>
        )
    })

    return (
        <section className={styles.menuContainer}>
            {/* slide 3 */}
            <h2>Menu</h2>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )
}

export default Menu