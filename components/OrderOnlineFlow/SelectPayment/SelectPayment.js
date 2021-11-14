import styles from "./SelectPayment.module.css"
import { useEffect } from "react"

export const SelectPayment = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    let data = props.currentUser
    console.log("Data", data.order)
    let contentList = "Not Order"
    let grandTotal = 0

    const nextPage = () => {
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
    }

    if (data.order.length !== 0) {
        //Generate The Order ID
        contentList = data.order.map((item, index) => {
            return (
                <li className={styles.listContainer} key={index}>
                    <span className={styles.listItem}>{item.title}</span>
                    <span className={styles.listItem}>{item.subTitle}</span>
                    <span className={styles.listItem}>{item.quantity}</span>
                    <span className={styles.listItem}>{item.price} €</span>
                </li>
            )
        })
        grandTotal = data.order.reduce((acc, crr) => acc + Number(crr.price), 0)
    }

    return (
        <div>
            <h2 className={styles.title} >Check your Order</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.orderContainer}>
                <h3 className={styles.subtitle}>Order Details</h3>
                <div className={styles.itemsContainer}>
                    <ul>
                        {contentList}
                    </ul>
                </div>
                <div className={styles.price}>
                    <span>{grandTotal} €</span>
                </div>
            </div>
            <div className={styles.buttonContainer} >
                <button  className={styles.payButton} onClick={nextPage}>PayPal</button>
                <button  className={styles.payButton} onClick={nextPage}>Cash</button>
            </div>
        </div>
    )
}

export default SelectPayment