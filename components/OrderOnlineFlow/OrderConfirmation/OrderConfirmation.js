import styles from "./OrderConfirmation.module.css"



export const OrderConfirmation = (props) => {
    const nextPage = () => {
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        props.setUserInQueue(true)
    }
    return (
        <div>
           <h2>Thank you for your Support</h2>
           {/*Maybe an Image*/}
           <p>Your order number is:</p>
           <span>{props.orderNumber}</span>
           <p>In case of whatever you can call us +49 12345678</p>
           <button onClick={nextPage}>Check The Queue</button>
        </div>
    )
}

export default OrderConfirmation