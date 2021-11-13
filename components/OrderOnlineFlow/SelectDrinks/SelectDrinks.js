import styles from "./SelectDrinks.module.css"
import { restaurantDrink } from "../../../public/Data/restaurantDrink"



export const SelectDrinks = (props) => {
    
    const selectedDrink = (event) => {
        let currentOrder = props.order
        
        switch (event.target.id) {
            
            case "0":
                let addMenu1 = { 
                    title: restaurantDrink[event.target.id].title, 
                    price: restaurantDrink[event.target.id].price,
                    quantity: 1,
                }
                
                props.setOrder([...currentOrder, addMenu1])
        
                return
            case "1":
                let addMenu2 = { 
                    title: restaurantDrink[Number(event.target.id)].title, 
                    price: restaurantDrink[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu2])
                return
            case "2":
                let addMenu3 = { 
                    title: restaurantDrink[Number(event.target.id)].title, 
                    price: restaurantDrink[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu3])
                return
            case "3":
                let addMenu4 = { 
                    title: restaurantDrink[Number(event.target.id)].title, 
                    price: restaurantDrink[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu4])
                return
        }
    }

    let content = restaurantDrink.map((menu, index) => {
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
                <button id={index} className={styles.cardButton} onClick={selectedDrink}>Select</button>
            </div>
        )
    })
    return (
        <section className={styles.menuContainer}>

            <h2 className={styles.title}>Select Drinks</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )

   
}

export default SelectDrinks

