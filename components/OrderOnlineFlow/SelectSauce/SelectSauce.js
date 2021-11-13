import styles from "./SelectSauce.module.css"
import {restaurantSauce} from "../../../public/Data/restaurantSauce.js"



export const SelectSauce = (props) => {
    
    const selectedSauce = (event) => {
        let currentOrder = props.order
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        switch (event.target.id) {
            
            case "0":
                let addMenu1 = { 
                    title: restaurantSauce[event.target.id].title, 
                    price: restaurantSauce[event.target.id].price,
                    quantity: 1,
                }
                
                props.setOrder([...currentOrder, addMenu1])
        
                return
            case "1":
                let addMenu2 = { 
                    title: restaurantSauce[Number(event.target.id)].title, 
                    price: restaurantSauce[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu2])
                return
            case "2":
                let addMenu3 = { 
                    title: restaurantSauce[Number(event.target.id)].title, 
                    price: restaurantSauce[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu3])
                return
            case "3":
                let addMenu4 = { 
                    title: restaurantSauce[Number(event.target.id)].title, 
                    price: restaurantSauce[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu4])
                return
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
                    
                    <div>{menu.price}</div>
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

