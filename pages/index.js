import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title/Title'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import styles from '../styles/Home.module.css'
import OrdersQueue from '../components/OrderOnlineFlow/OrdersQueue/OrdersQueue'

export default function Home(props) {

  console.log(props.data)
  return (
    <>
      <Head>
        <title>Stir It Up</title>
        <meta name="description" content="Mongolian BBQ Social Restaurant in Berlin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title />
      <AboutUs />
      <Menu 
        userSelectMenu={props.userSelectMenu}
        setUserSelectMenu={props.setUserSelectMenu}
        currentStep={props.currentStep} 
        setCurrentStep={props.setCurrentStep} 
        order={props.order} 
        setOrder={props.setOrder}
      />
      <OrdersQueue />
    </>
  )
}
