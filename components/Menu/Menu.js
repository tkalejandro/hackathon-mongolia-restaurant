
import styles from './Menu.module.css'
import Image from 'next/image'
import img1 from "../../images/mongoliabbq.jpeg"
import img2 from "../../images/menuBG.jpg"

import { restaurantMenu } from '../../public/Data/restaurantMenu'

const Menu = () => {
    //This will Loop all set menus that we want to put. No need to write more code.
    //To add more menu, please go to Public > Data > restaurantMenu.js
    let content = restaurantMenu.map((menu, index) => {
        return (
            <div key={index} className={styles.menuCard}>

                <Image
                    src={img1}
                    alt={menu.title}
                />
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.protein}</p>
                    <span>+</span>
                    <p>{menu.veggies}</p>
                    <div>{menu.price}</div>
                </div>
                <button className={styles.cardButton}>YES</button>
            </div>
        )
    })

    return (
        <section className={styles.menuContainer}>
            {/* slide 3 */}
        
            <Image
                    src={img2}
                    className={styles.bgImage}
                />
            
            <h2>Menu</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )
}

export default Menu