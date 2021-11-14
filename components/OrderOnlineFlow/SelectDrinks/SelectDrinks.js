import styles from "./SelectDrinks.module.css"
import { restaurantDrink } from "../../../public/Data/restaurantDrink"
import { useEffect } from "react"


export const SelectDrinks = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const selectedDrink = (event) => {
        let currentOrder = props.order
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        
        let addDrink = {
            title: restaurantDrink[event.target.id].title,
            subTitle: restaurantDrink[event.target.id].subTitle,
            price: restaurantDrink[event.target.id].price,
            quantity: 1,
        }
        switch (event.target.id) {
            case "0":
                props.setOrder([...currentOrder, addDrink])

                break
            case "1":
                props.setOrder([...currentOrder, addDrink])
                break
            case "2":
                props.setOrder([...currentOrder, addDrink])
                break
            case "3":
                props.setOrder([...currentOrder, addDrink])
                break
            default:
                break
        }
    }

    let content = restaurantDrink.map((menu, index) => {
        return (
            <div key={index}  className={styles.menuCard} >

                {/* <Image
                    src={img1}
                    alt={menu.title}

                /> */}
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.description}</p>
                    
                    <div>{menu.price} €</div>
                </div>
                <button id={index} className={styles.cardButton} onClick={selectedDrink}>Select</button>
            </div>
        )
    })
    return (
        <section className={styles.menuContainer}>

            <h2 className={styles.title}>Drinks</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )

   
}

export default SelectDrinks

