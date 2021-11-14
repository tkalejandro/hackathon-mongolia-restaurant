import styles from './AboutUs.module.css'
import Image from 'next/image'
import faceOne from '../../public/images/aboutImage.jpg'

const AboutUs = () => {


  return (
    <section className={styles.aboutContainer}>
      {/* slide 2 */}

      <div className={styles.imageContainerAboutTop}>


      </div>
      <article>
        <h2>ABOUT US</h2>
        <div className={styles.underline}>____________________</div>
        <div className={styles.roundImageContainer}>
          <div className={styles.imageContainer1}>
            <div>
              <Image
                className={styles.faces}
                src={faceOne}
                alt="picture of us"
                width="150px"
                height="150px"
                objectFit="cover"
              />
            </div>
            <p><strong>Our Mongolian BBQ</strong> is based on the traditional recipe by Wu Zhaonan.</p>
          </div>
          <div className={styles.imageContainer2}>
            <div>
              <Image
                className={styles.faces}
                src={faceOne}
                alt="picture of us"
                width="150px"
                height="150px"
                objectFit="cover"
              />
            </div>
            <p>Mongolian BBQ is not only a <strong>delicious food</strong> but has a big History behind it. </p>

          </div>
          <div className={styles.imageContainer3}>
            <div>
              <Image
                className={styles.faces}
                src={faceOne}
                alt="picture of us"
                width="150px"
                height="150px"
                objectFit="cover"
              />
            </div>
            <p>Wu Zhaonan had to leave China because of repressive Politics. He, as a refugee, found hope and Community in selling Mongolian BBQ.
            </p>
            <p> <strong>Our mission</strong> is not only to deliver you delicious food, but also to follow his steps and give hope to refugees.

            </p>
          </div>
        </div>





        {/* <p>We welcome you to <strong>Stir it Up!</strong>
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

        </p> */}

      </article>

      <div className={styles.imageContainerAboutBottom}>
        {/* <Image 
            className={styles.aboutImageBottom}
            src={aboutImageBottom}
            alt="picture of vegetables"
            layout="fill"
            
          /> */}
      </div>

    </section>
  )
}

export default AboutUs