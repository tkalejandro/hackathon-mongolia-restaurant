
import styles from './Menu.module.css'
import Image from 'next/image'
import img1 from "../../images/mongoliabbq.jpeg"
import menuBackground from "../../images/foodMarket.jpg"

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
                    <div className={styles.price} >{menu.price}</div>
                </div>
                <button className={styles.cardButton}>Select</button>
            </div>
        )
    })

    return (
        <section className={styles.menuContainer}>
            {/* slide 3 */}
            {/* This is working somehow! xD
                This is a good example of how to make background
                Make sure to use the same as this.
                And same in the css.
                THE PARENT MUST BE POSITION RELATIVE.
             */}
            {/* <Image 
            className={styles.bgImage}
            src={menuBackground}
            alt="Menu Background"
            layout="fill"
            
          /> */}
            
            <h2 className={styles.title}>Menu</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )
}

export default Menu