import styles from "./SelectMenu.module.css"
import { restaurantMenu } from "../../../public/Data/restaurantMenu.js"
import { useEffect } from "react"

export const SelectMenu = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const selectedMenu = (event) => {

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

    let content = restaurantMenu.map((menu, index) => {
        return (
            <div key={index} className={styles.menuCard} >

                {/* <Image
                    src={img1}
                    alt={menu.title}

                /> */}
                <img className={styles.cardImage} src={menu.img} alt={menu.title}/>
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.protein}</p>
                    <span>+</span>
                    <p>{menu.veggies}</p>
                    <div>{menu.price} €</div>
                </div>
                <button id={index} className={styles.cardButton} onClick={selectedMenu}>Select</button>
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
                <div>
                    
                </div>
  
        </section>
    )
}

export default SelectMenu
