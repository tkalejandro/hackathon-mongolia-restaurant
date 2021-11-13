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
    return(
        <>
        <h1>Order Now</h1>
        <section>
            <SelectMenu 
                currentUser={props.currentUser}
                order={props.order}
                setOrder={props.setOrder}
            />
            <SelectSauce />
            <SelectDrinks />
            <AddressAndDetails />
            <SelectPayment />
            <OrderConfirmation />
            <OrdersQueue />
        </section>
        </>
    )
}

export default orderNow