import styles from "./OrderConfirmation.module.css"
import { useEffect } from "react"



export const OrderConfirmation = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const nextPage = () => {
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        props.setUserInQueue(true)
    }
    return (

        <div className={styles.thanks}>


            <h2 className={styles.title}>Thank YOU!</h2>
            <div className={styles.underline}>🎉🎉🎉🎉🎉🎉🎉🎉🎉</div>
            {/*Maybe an Image*/}
           
                <div className={styles.orderContainer}>
                <div className={styles.thanksContainer}>
                    <p className={styles.subtitle}>Your order number is:</p>
                    <span className={styles.orderNumber}>{props.orderNumber}</span>
                </div>
                <div >
                   
                    <button className={styles.button} onClick={nextPage}>Check The Queue</button>
                    <p className={styles.contact}>In case of any Problems you can contact us +49 30 4328795621 </p>
 
                </div>
            </div>
        </div>

    )
}

export default OrderConfirmation