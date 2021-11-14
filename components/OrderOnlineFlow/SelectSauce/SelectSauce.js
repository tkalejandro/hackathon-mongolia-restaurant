import styles from "./SelectSauce.module.css"
import {restaurantSauce} from "../../../public/Data/restaurantSauce.js"
import { useEffect } from "react"

export const SelectSauce = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const selectedSauce = (event) => {
        let currentOrder = props.order
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        let addSauce = {
            title: restaurantSauce[event.target.id].title,
            subTitle: restaurantSauce[event.target.id].subTitle,
            price: restaurantSauce[event.target.id].price,
            quantity: 1,
        }
        switch (event.target.id) {
            case "0":
                props.setOrder([...currentOrder, addSauce])

                break
            case "1":
                props.setOrder([...currentOrder, addSauce])
                break
            case "2":
                props.setOrder([...currentOrder, addSauce])
                break
            case "3":
                props.setOrder([...currentOrder, addSauce])
                break
            default:
                break
        }
    }

    let content = restaurantSauce.map((menu, index) => {
        return (
            <div key={index}  className={styles.menuCard} >

                {/*<Image
                    src={img1}
                    alt={menu.title}

                />*/}
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.description}</p>
                    
                    <div className={styles.price}>{menu.price} €</div>
                </div>
                <button id={index} className={styles.cardButton} onClick={selectedSauce}>Select</button>
            </div>
        )
    })
    return (
        <section className={styles.menuContainer}>

            <h2 className={styles.title}>Sauces</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )

   
}

export default SelectSauce

