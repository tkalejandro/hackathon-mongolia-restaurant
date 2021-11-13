import styles from "./SelectPayment.module.css"



export const SelectPayment = (props) => {
    let data = props.currentUser
    console.log("Data", data.order)
    let contentList = "Not Order"
    let grandTotal = 0
    
    if(data.order.length !== 0) {
        //Generate The Order ID
        contentList = data.order.map((item, index) => {
            return(
                <li key={index}>
                    <span>{item.title}</span>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                </li>
            )
        })
        grandTotal = data.order.reduce((acc, crr) => acc + Number(crr.price), 0)
    }
    
    return (
        <div>
            <h2>Checkout!</h2>
            <div className={styles.underline}>_____________________</div>
            <div>
                <h3>Order Details:</h3>
                <ul>
                    {contentList}
                </ul>
                <span>{grandTotal}</span>
            </div>
            <div>
                <button>PayPal</button>
                <button>Cash</button>
            </div>
        </div>
    )
}

export default SelectPayment