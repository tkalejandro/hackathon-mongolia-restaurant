import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  
  //BOOLEAN
  const [userSelectMenu, setUserSelectMenu] = useState(false)
  const [userInQueue, setUserInQueue] = useState(false)
  //FORM
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")

  const [order, setOrder] = useState([])
  const [orderNumber, setOrderNumber] = useState("")

  //CURRENT USER:
  const [currentUser, setCurrentUser] = useState({
    userSelectMenu: userSelectMenu,
    userInQueue: userInQueue,
    fullName: fullName,
    email: email,
    address: address,
    order: order,
    orderNumber: orderNumber

  })
  return (
    <Layout>
      <Component
        {...pageProps}
        userSelectMenu={userSelectMenu}
        setUserSelectMenu={setUserSelectMenu}
        userInQueue={userInQueue}
        setUserInQueue={setUserInQueue}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        address={address}
        setAddress={setAddress}
        order={order}
        setOrder={setOrder}
        orderNumber={orderNumber}
        setOrderNumber={setOrderNumber}
        currentUser={currentUser}
      />
    </Layout>
  )
}

export default MyApp
