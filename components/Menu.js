
import styles from '../styles/Home.module.css'
import { restaurantMenu } from '../public/Data/restaurantMenu'

const Menu = () => {
    //This will Loop all set menus that we want to put. No need to write more code.
    //To add more menu, please go to Public > Data > restaurantMenu.js
    let content = restaurantMenu.map((menu, index) => {
        return(
            <div key={index} className={styles.menuCard}>
                <div>Image go here</div>
                <h3>{menu.title}</h3>
                <p>{menu.description}</p>
                <button>Buy me!</button>
            </div>
        )
    })

    return(
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