import styles from './Title.module.css'
import Image from "next/image"
import landingImage from "../../images/landingImage.jpg"


const Title = () => {

    return(
        <section className={styles.titleContainer}>
          <Image 
            src={landingImage}
            alt="Landing Page Stir It Up"
            layout="fill"
            className={styles.bgImage}
            
          />
          {/* slide 1 */}
          <div className={styles.titleDiv}>
            <h1>STIR IT UP!</h1>

            <div className={styles.underline}>_____________________</div>
            <p> Mongolian BBQ Restaurant!</p>
          </div>
        </section>
    )
}

export default Title