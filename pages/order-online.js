import AddressAndDetails from "../components/OrderOnlineFlow/AddressAndDetails/AddressAndDetails"
import OrderConfirmation from "../components/OrderOnlineFlow/OrderConfirmation/OrderConfirmation"
import OrdersQueue from "../components/OrderOnlineFlow/OrdersQueue/OrdersQueue"
import SelectDrinks from "../components/OrderOnlineFlow/SelectDrinks/SelectDrinks"
import SelectMenu from "../components/OrderOnlineFlow/SelectMenu/SelectMenu"
import SelectPayment from "../components/OrderOnlineFlow/SelectPayment/SelectPayment"
import SelectSauce from "../components/OrderOnlineFlow/SelectSauce/SelectSauce"


const orderNow = (props) => {
    let userSelectMenu = props.userSelectMenu
    let currentStep = props.currentStep
    console.log("Current User", props.currentUser)
    console.log("Current Order", props.order)
    return (
        <>
            <h1 className="orderHiddenH1">Order Now</h1>
            <section className="backgroundContainer">
                {
                    currentStep === 0
                        ? <SelectMenu currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} order={props.order} setOrder={props.setOrder} />
                        : currentStep === 1
                            ? <SelectSauce currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} order={props.order} setOrder={props.setOrder} />
                            : currentStep === 2
                                ? <SelectDrinks currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} order={props.order} setOrder={props.setOrder} />
                                : currentStep === 3
                                    ? <AddressAndDetails
                                        currentStep={props.currentStep}
                                        setCurrentStep={props.setCurrentStep}
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
                                    : currentStep === 4
                                        ? <SelectPayment currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} currentUser={props.currentUser} />
                                        : currentStep === 5
                                            ? <OrderConfirmation
                                                setUserInQueue={props.setUserInQueue}
                                                currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} orderNumber={props.orderNumber} />
                                            : <OrdersQueue
                                                setUserInQueue={props.setUserInQueue}
                                                userInQueue={props.userInQueue}
                                                orderNumber={props.orderNumber}
                                                currentStep={props.currentUser}
                                                setCurrentStep={props.setCurrentStep}
                                            />
                }
            </section>
        </>
    )
}

export default orderNow