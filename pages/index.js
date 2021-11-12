import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
          
        <div className={styles.underline}>_________________________</div>
        <p> Mongolian BBQ Restaurant!</p>
        </div>
        </section>
        <section className={styles.aboutContainer}>
          {/* slide 2 */}
          <h2>About</h2>
        </section>
        <section className={styles.menuContainer}>
          {/* slide 3 */}
          <h2>Menu</h2>
        </section>
        <section className={styles.orderContainer}>
          {/* slide 4 */}
          <h2>Order</h2>
        </section>

      </main>

      <footer className={styles.footer}>
        {/* slide 5 */}
        <h2>Footer</h2>
      </footer>
    </div>
  )
}
