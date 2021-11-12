import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title/Title'
import AboutUs from '../components/AboutUs/AboutUs'
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

      <Title />
      <AboutUs />
      <Menu />
      <section className={styles.orderContainer}>
        {/* slide 4 */}
        <h2>Order</h2>
      </section>
    </>
  )
}
