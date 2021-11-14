import styles from './Title.module.css'
import Image from "next/image"
import landingImage from "../../public/images/landingImage.jpg"
import logoImage from "../../public/images/StirItUp.png"
import logoWhite from "../../public/images/logoWhite.png"
import logoBlack from "../../public/images/logoBlack.png"


const Title = () => {

  return (
    <section className={styles.titleContainer}>
      <Image 
            src={landingImage}
            alt="Landing Page Stir It Up"
            layout="fill"
            className={styles.bgImage}
            
          />
      {/* slide 1 */}

      <h1 >STIR IT UP!</h1>
      <div className={styles.baconContainer}>
        <Image
          src={logoImage}
          alt="Logo"
          className={styles.logoImage}
        />
      </div>
      <p> Mongolian BBQ Restaurant!</p>
      
      <div className={styles.circleLogo}>
        <div className={styles.circle}></div>
        <Image
          src={logoWhite}
          alt="Logo"
          className={styles.logoWhite}

        />
      </div>

    </section>
  )
}

export default Title