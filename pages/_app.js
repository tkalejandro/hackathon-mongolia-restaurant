import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useState, useEffect } from 'react'
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

  //DUMMY DATA
  const [data, setData] = useState(["H799", "Z895", "A795", "B455", "M425", "U005", "X123"])

  //CURRENT USER:
  const [currentStep, setCurrentStep] = useState(0)
  const [currentUser, setCurrentUser] = useState({
    order: [],
    fullName: "",
    email: "",
    city: "",
    address: "",
  })
  //ID
  const generateId = () => {
    //4 digits
    return `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
}
  useEffect(() => {
    setOrderNumber(generateId)
  }, [])
  
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
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        data={data}
        setData={setData}
      />
    </Layout>
  )
}

export default MyApp
