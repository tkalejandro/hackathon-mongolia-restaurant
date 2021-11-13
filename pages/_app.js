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
  const [city, setCity] = useState("Berlin")
  const [address, setAddress] = useState("")

  const [order, setOrder] = useState([])
  const [orderNumber, setOrderNumber] = useState("")

  //CURRENT USER:
  const [currentUser, setCurrentUser] = useState({
    order: [],
    fullName: "",
    email: "",
    city: "",
    address: ""
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
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        order={order}
        setOrder={setOrder}
        orderNumber={orderNumber}
        setOrderNumber={setOrderNumber}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </Layout>
  )
}

export default MyApp
