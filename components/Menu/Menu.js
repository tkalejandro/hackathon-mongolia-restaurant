import styles from './Menu.module.css'
import Link from "next/link"


import { restaurantMenu } from '../../public/Data/restaurantMenu.js'

const Menu = (props) => {
    const selectedMenu = (event) => {
        console.log("Restaurant Menu", restaurantMenu)
        let currentOrder = props.order
        let currentStep = props.currentStep
        props.setUserSelectMenu(true)
        props.setCurrentStep(currentStep + 1)
        let addMenu = {
            title: restaurantMenu[event.target.id].title,
            subTitle: restaurantMenu[event.target.id].subTitle,
            price: restaurantMenu[event.target.id].price,
            quantity: 1,
        }
        switch (event.target.id) {
            case "0":
                props.setOrder([...currentOrder, addMenu])

                break
            case "1":
                props.setOrder([...currentOrder, addMenu])
                break
            case "2":
                props.setOrder([...currentOrder, addMenu])
                break
            case "3":
                props.setOrder([...currentOrder, addMenu])
                break
            default:
                break
        }
    }

    //This will Loop all set menus that we want to put. No need to write more code.
    //To add more menu, please go to Public > Data > restaurantMenu.js
    let content = restaurantMenu.map((menu, index) => {
        return (
            <div key={index} className={styles.menuCard}>
                <img className={menuImage} src={menu.img} alt={menu.title} />
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.protein}</p>
                    <span>+</span>
                    <p>{menu.veggies}</p>
                    <div className={styles.price} >{menu.price} €</div>
                </div>


                {
                    props.userSelectMenu
                        ? <></>
                        : <> <Link href='/order-online' passHref>
                            <button id={index} className={styles.cardButton} onClick={selectedMenu}>Select</button>
                        </Link></>
                }


            </div>
        )
    })


    return (
        <section className={styles.menuContainer}>
            <h2 className={styles.title}>Menu</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>
            {
                props.userSelectMenu
                ?<><Link href='/order-online' passHref>
                            <button className={styles.cardButton}>Finish Order</button>
                        </Link></>
                :<></>
            }

        </section>
    )
}

export default Menu