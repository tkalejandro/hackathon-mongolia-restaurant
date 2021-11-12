import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stir It Up</title>
        <meta name="description" content="Mongolian BBQ Social Restaurant in Berlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/*imageLogo+Nav  */}

      </header>
      <main className={styles.main}>
        <section className={styles.titleContainer}>
          {/* slide 1 */}
          <div className={styles.titleDiv}>
            <h1>STIR IT UP!</h1>

            <div className={styles.underline}>_____________________</div>
            <p> Mongolian BBQ Restaurant!</p>
          </div>
        </section>
        <section className={styles.aboutContainer}>
          {/* slide 2 */}

          <div className={styles.imageContainerAboutLeft}></div>
          <article>
            <h2>ABOUT US</h2>
            <div className={styles.underline2}>______________________</div>

            <p>Based of the traditional recepie by Wu Zhaonan
              Stir it Up! Mongolian Barbecue combines a selection of marinated meats and vegetables which are then stir fried.</p>
            <p>Just like Wu Zhaonan who had to flee his native China we pride ourself In hiring Refugees</p>
          </article>
          <div className={styles.imageContainerAboutRight}></div>

        </section>
        <Menu />
        <section className={styles.orderContainer}>
          {/* slide 4 */}
          <h2>Order</h2>
        </section>

      </main>

      <Footer />
    </>
  )
}
