import Link from "next/link"
import styles from "./Button.module.css"

const Button = (props) => {
    let typeOfBtn = props.type

    switch(typeOfBtn){
        case "cancel":
            return (
                <Link href={props.link} passHref>
                    <button className={styles.cancelBtn}>{props.text}</button>
                </Link>
            )
        case "return":
            return(
                <button className={styles.returnBtn}>{props.text}</button>
            )
    }
   
}