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
    let order = props.order
    console.log("---ORDER---", order)
    // console.log("goback order",props.order)
    // console.log("goback step",currentStep)
    const goBack = () => {


        if (currentStep === 1 || currentStep === 2 || currentStep === 3) {
            let newArray = order.splice(0, order.length - 1)
            props.setOrder(newArray)
        }

        let newStep = currentStep - 1
        props.setCurrentStep(newStep)
    }
    const cancelOrder = () => {
        props.setCurrentStep(0)
        props.setOrder([])
        props.setUserSelectMenu(false)
    }

    return (
        <>
            <h1 className="orderHiddenH1">Order Now</h1>
            <section className="backgroundContainer">
                {
                    currentStep === 0
                        ? <SelectMenu setUserSelectMenu={props.setUserSelectMenu} currentStep={props.currentStep} setCurrentStep={props.setCurrentStep} order={props.order} setOrder={props.setOrder} />
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
                                                data={props.data}
                                                setData={props.setData}
                                                userSelectMenu={props.userSelectMenu}
                                                setUserSelectMenu={props.setUserSelectMenu}
                                                setOrder={props.setOrder}
                                            />
                }
                <div>
                    {
                        currentStep === 0 || currentStep === 5 || currentStep === 6
                            ? <></>
                            : <div className="containerButtons"><button id="returnButton" onClick={goBack}>RETURN</button> <button id="cancelButton" onClick={cancelOrder}>CANCEL</button></div>
                    }
                </div>
            </section>

        </>
    )
}

export default orderNow