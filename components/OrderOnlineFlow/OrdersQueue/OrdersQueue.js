
import styles from "./OrdersQueue.module.css"
import { useEffect, useState } from "react";


export const OrdersQueue = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    


    const [data, setData] = useState(["H799", "Z895", "A795", "B455", "M425", "U005", "X123"])

    



    const generateFakeData = () => {
        let letter = "ABCDEFGHIJKLMNOPQRSTUVYXZ"
        return `${letter[Math.floor(Math.random() * letter.length)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    }

    console.log("Order number:", props.orderNumber)
    console.log("User in Q", props.userInQueue)
    useEffect(() => {
        const interval = setInterval(() => {

        let cloneData = [...data]
        cloneData.push(generateFakeData())
        props.userInQueue ? (cloneData.push(props.orderNumber), props.setUserInQueue(false)) : props.userInQueue
        cloneData.shift()
        console.log(data)
        setData(cloneData)
        }, 10000);
        return () => clearInterval(interval);
      }, [data]);



    let orders = data.map((item, index) => {
        return (
            <div key={index} className={styles.dataBox}>
                {index === 0
                    ? <span>Delivered</span>
                    : index === 1
                        ? <span>Preparing</span>
                        : <span>{index - 1}</span>
                }
                <span>Order</span>
                <span>{item}</span>

            </div>
        )
    })



    return (
        <div>
            <h2>Where is my order</h2>
            <div className={styles.dataBoxContainer}>
                {data.length === 0
                    ? <p>There is no orders</p>
                    : orders
                }
            </div>
        </div>
    )
}

export default OrdersQueue