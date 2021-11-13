import AddressAndDetails from "../components/OrderOnlineFlow/AddressAndDetails/AddressAndDetails"
import OrderConfirmation from "../components/OrderOnlineFlow/OrderConfirmation/OrderConfirmation"
import OrdersQueue from "../components/OrderOnlineFlow/OrdersQueue/OrdersQueue"
import SelectDrinks from "../components/OrderOnlineFlow/SelectDrinks/SelectDrinks"
import SelectMenu from "../components/OrderOnlineFlow/SelectMenu/SelectMenu"
import SelectPayment from "../components/OrderOnlineFlow/SelectPayment/SelectPayment"
import SelectSauce from "../components/OrderOnlineFlow/SelectSauce/SelectSauce"


const orderNow = (props) => {
    /*
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
    */
    let userSelectMenu = props.userSelectMenu
    console.log("Current User", props.currentUser)
    console.log("Current Order", props.order)
    return (
        <>
            <h1 className="orderHiddenH1">Order Now</h1>
            <section className="backgroundContainer">
                <SelectMenu
                    order={props.order}
                    setOrder={props.setOrder}
                />
                {/* <SelectSauce
                    order={props.order}
                    setOrder={props.setOrder}
                />
                <SelectDrinks
                    order={props.order}
                    setOrder={props.setOrder}
                />
                <AddressAndDetails
                    currentUser={props.currentUser}
                    fullName={props.fullName}
                    setFullName={props.setFullName}
                    email={props.email}
                    setEmail={props.setEmail}
                    address={props.address}
                    setAddress={props.setAddress}
                    order={props.order}
                />
                <SelectPayment />
                <OrderConfirmation />
                <OrdersQueue /> */}
            </section>
        </>
    )
}

export default orderNow