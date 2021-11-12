import { restaurantInfo } from "../public/Data/restaurantInfo"
import styles from '../styles/Home.module.css'

const Footer = () => {
    // Restaurant Info Data it will be looping automatic
    let content = Object.entries(restaurantInfo).map((element, index) => {
        return (
            <div key={index}>
                <h3>{element[0]}</h3>
                <p>{element[1]}</p>
            </div>
        )
    })

    return(
        <footer className={styles.footer}>
            {/* slide 5 */}
            <h2>Contact Us</h2>
            {content}
        </footer>
    )
}

export default Footer