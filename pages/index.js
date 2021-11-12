import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
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
         {/* slide 1 */}
         <h1>TITLE</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.aboutContainer}>
          {/* slide 2 */}
          <h2>About</h2>
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
