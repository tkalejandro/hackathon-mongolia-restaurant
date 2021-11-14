import styles from './Title.module.css'
import Image from "next/image"
import landingImage from "../../public/images/landingImage.png"
import landingImageBig from "../../public/images/landingImageBig.jpeg"
import logoImage from "../../public/images/StirItUp.png"
import old2 from "../../public/images/old2.jpg"
import logoOrange from "../../public/images/logoOrange.png"
import logoBlack from "../../public/images/logoBlack.png"
import { useState, useEffect } from 'react'

const Title = () => {
 
  return (
    <section className={styles.titleContainer}>
    
       <Image
        src={old2}
        alt="Landing Page"
        layout="fill"
        objectFit="cover"
        className={styles.bgImage}
      />
      

      <h1 >STIR IT UP!</h1>
      <div className={styles.imageContainer}>
        <Image
          src={logoImage}
          alt="Logo"
          className={styles.logoImage}
        />
      </div>

      <div className={styles.secondImageContainer}>
        <div className={styles.image}>
          {/* <Image
          src={}
          alt="Logo"
          className={styles.logoWhite}

        /> */}
        </div>
      </div>

    </section>
  )
}

export default Title