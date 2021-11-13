import styles from "./SelectMenu.module.css"
import {restaurantMenu} from "../../../public/Data/restaurantMenu.js"
import Image from "next/image"
import img1 from "../../../images/mongoliabbq.jpeg"
export const SelectMenu = (props) => {

    const selectedMenu = (event) => {
        console.log(event.target.id)
        console.log(typeof event.target.id)
        let currentOrder = props.order
        
        switch (event.target.id) {
            
            case "0":
                let addMenu1 = { 
                    title: restaurantMenu[event.target.id].title, 
                    price: restaurantMenu[event.target.id].price,
                    quantity: 1,
                }
                
                props.setOrder([...currentOrder, addMenu1])
        
                return
            case "1":
                let addMenu2 = { 
                    title: restaurantMenu[Number(event.target.id)].title, 
                    price: restaurantMenu[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu2])
                return
            case "2":
                let addMenu3 = { 
                    title: restaurantMenu[Number(event.target.id)].title, 
                    price: restaurantMenu[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu3])
                return
            case "3":
                let addMenu4 = { 
                    title: restaurantMenu[Number(event.target.id)].title, 
                    price: restaurantMenu[event.target.id].price,
                    quantity: 1,
                }
                props.setOrder([...currentOrder, addMenu4])
                return
        }
    }

    let content = restaurantMenu.map((menu, index) => {
        return (
            <div key={index}  className={styles.menuCard} >

                {/*<Image
                    src={img1}
                    alt={menu.title}

                />*/}
                <div className={styles.cardInfoContainer}>
                    <h3 className={styles.cardTitle}>{menu.title}</h3>

                    <span className={styles.subTitle}>{menu.subTitle}</span>
                    <p>{menu.protein}</p>
                    <span>+</span>
                    <p>{menu.veggies}</p>
                    <div>{menu.price}</div>
                </div>
                <button id={index} className={styles.cardButton} onClick={selectedMenu}>Select</button>
            </div>
        )
    })
    console.log("User Orders:", props.order)
    return (
        <section className={styles.menuContainer}>

            <h2 className={styles.title}>Menu</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.menuSetContainer}>
                {content}
            </div>

        </section>
    )
}

export default SelectMenu
