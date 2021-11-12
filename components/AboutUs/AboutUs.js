import styles from './AboutUs.module.css'

const AboutUs = () => {


    return (
        <section className={styles.aboutContainer}>
          {/* slide 2 */}

          <div className={styles.imageContainerAboutTop}></div>
          <article>
            <h2>ABOUT US</h2>
            <div className={styles.underline2}>____________________</div>

            <p>Based of the traditional recepie by Wu Zhaonan
              Stir it Up! Mongolian Barbecue combines a selection of marinated meats and vegetables which are then stir fried.</p>
            <p>Just like Wu Zhaonan who had to flee his native China we pride ourself In hiring Refugees</p>
            <p>Just like Wu Zhaonan who had to flee his native China we pride ourself In hiring Refugees</p>
            <p>Just like Wu Zhaonan who had to flee his native China we pride ourself In hiring Refugees</p>
            <p>Just like Wu Zhaonan who had to flee his native China we pride ourself In hiring Refugees</p>

          </article>
          <div className={styles.imageContainerAboutBottom}></div>

        </section>
    )
}

export default AboutUs