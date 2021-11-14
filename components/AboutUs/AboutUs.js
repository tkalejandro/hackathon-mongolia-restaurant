import styles from './AboutUs.module.css'
import aboutImageTop from "../../public/images/veggi.jpg"
import Image from 'next/image'
import aboutImageBottom from "../../public/images/veggi.jpg"

const AboutUs = () => {


    return (
        <section className={styles.aboutContainer}>
          {/* slide 2 */}

          <div className={styles.imageContainerAboutTop}>
          <Image 
            className={styles.aboutImageTop}
            src={aboutImageTop}
            alt="picture of vegetables"
            layout="fill"
            
          />

          </div>
          <article>
            <h2>ABOUT US</h2>
            <div className={styles.underline2}>____________________</div>

            <p>We welcome you to <strong>Stir it Up!</strong>
</p>
            <p><strong>Our Mongolian BBQ</strong> is based on the traditional recipe by Wu Zhaonan.
</p>
            <p>We will prepare for you marinated meats combined with fresh vegetables stir fried over a giant fring pan.</p>
            <p>Mongolian BBQ is not only a <strong>delicious food</strong> but has a big History behind it. </p>
            <p>Wu Zhaonan had to leave China because of repressive Politics. He, as a refugee, found hope and Community in selling Mongolian BBQ. 
</p>
<p> <strong>Our mission</strong> is not only to deliver you delicious food, but also to follow his steps and give hope to refugees. 

</p>
<p>If you are more interested in our Philosophy you can click here.  

</p>

          </article>
 
          <div className={styles.imageContainerAboutBottom}>
          <Image 
            className={styles.aboutImageBottom}
            src={aboutImageBottom}
            alt="picture of vegetables"
            layout="fill"
            
          />
          </div>

        </section>
    )
}

export default AboutUs