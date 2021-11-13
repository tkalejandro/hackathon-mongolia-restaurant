import { restaurantInfo } from "../../public/Data/restaurantInfo"
import styles from './Footer.module.css'
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
            <div className={styles.contactContainer}>
            
            <h2>Contact Us</h2>
           
            {content}
            </div>
            
            <div className={styles.favContainer}>
           <div className={styles.fav1}
           >Pinterest</div>
                      <div className={styles.fav1}
           >Facebook</div>
                      <div className={styles.fav1}
           >TripAdvisor</div>
           </div>
        </footer>
    
    )


}

export default Footer