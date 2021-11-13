import AddressAndDetails from "../components/OrderOnlineFlow/AddressAndDetails/AddressAndDetails"
import OrderConfirmation from "../components/OrderOnlineFlow/OrderConfirmation/OrderConfirmation"
import OrdersQueue from "../components/OrderOnlineFlow/OrdersQueue/OrdersQueue"
import SelectDrinks from "../components/OrderOnlineFlow/SelectDrinks/SelectDrinks"
import SelectMenu from "../components/OrderOnlineFlow/SelectMenu/SelectMenu"
import SelectPayment from "../components/OrderOnlineFlow/SelectPayment/SelectPayment"
import SelectSauce from "../components/OrderOnlineFlow/SelectSauce/SelectSauce"


const orderNow = (props) => {
    let userSelectMenu = props.userSelectMenu
    console.log("Current User", props.currentUser)
    console.log("Current Order", props.order)
    return (
        <>
            <h1>Order Now</h1>
            <section>
                <SelectMenu
                    order={props.order}
                    setOrder={props.setOrder}
                />
                <SelectSauce
                    order={props.order}
                    setOrder={props.setOrder}
                />
                <SelectDrinks
                    order={props.order}
                    setOrder={props.setOrder}
                />
                <AddressAndDetails
                    fullName={props.fullName}
                    setFullName={props.setFullName}
                    email={props.email}
                    setEmail={props.setEmail}
                    city={props.city}
                    setCity={props.setCity}
                    address={props.address}
                    setAddress={props.setAddress}
                    order={props.order}
                    setCurrentUser={props.setCurrentUser}
                />
                <SelectPayment 
                    currentUser={props.currentUser}
                />
                <OrderConfirmation />
                <OrdersQueue />
            </section>
        </>
    )
}

export default orderNow