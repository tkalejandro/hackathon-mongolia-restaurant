
import styles from "./OrdersQueue.module.css"
import { useEffect, useState } from "react";


export const OrdersQueue = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    let data = props.data
    

    



    const generateFakeData = () => {
        let letter = "ABCDEFGHIJKLMNOPQRSTUVYXZ"
        return `${letter[Math.floor(Math.random() * letter.length)]}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    }

    console.log("Order number:", props.orderNumber)
    console.log("User in Q", props.userInQueue)
    console.log("User select Menu", props.userSelectMenu)
    useEffect(() => {
        const interval = setInterval(() => {

        let cloneData = [...data]

        
        cloneData.push(generateFakeData())
        props.userInQueue ? (cloneData.push(props.orderNumber), props.setUserInQueue(false)) : props.userInQueue

        cloneData.includes(props.orderNumber) ? console.log("You are in Queue") : (props.setUserSelectMenu(false), props.setCurrentStep(0), props.setOrder([]))
        cloneData.shift()
        console.log(data)
        props.setData(cloneData)
        }, 7000);
        return () => clearInterval(interval);
      }, [data]);



    let orders = data.map((item, index) => {
        
        return (
            
            <div id={data.includes(props.orderNumber) && item === props.orderNumber ? "specialID" : ""} key={index} className={styles.dataBox}>
                {index === 0
                    ? <span className={styles.delivered}>Delivered</span>
                    : index === 1
                        ? <span className={styles.preparing}>Preparing</span>
                        : <span className={styles.number}>{index - 1}</span>
                }
                <span className={styles.hidden}>Order</span>
                <span className={styles.orderNumber} >{item}</span>

            </div>
        )
    })



    return (
        <div>
            <h2 className={styles.title}>Where is my order</h2>
            <div className={styles.underline}>_____________________</div>
            <div className={styles.orderContainer}>
            <div className={styles.dataBoxContainer}>
                {data.length === 0
                    ? <p>There are no current orders</p>
                    : orders
                }
            </div>
        </div>
        </div>
    )
}

export default OrdersQueue