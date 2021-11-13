import styles from "./AddressAndDetails.module.css"



export const AddressAndDetails = (props) => {
    const detectChange = (event) => {
        switch (event.target.name) {
            case "fullName":
                props.setFullName(event.target.value)
                break;
            case "email":
                props.setEmail(event.target.value)
                break;
            case "address":
                props.setAddress(event.target.value)
                break;
            case "city":
                props.setAddress(event.target.value)
                break;
            default:
                break;
        }

    }
    const preOrder = (event) => {
        event.preventDefault()
        let currentStep = props.currentStep
        props.setCurrentStep(currentStep + 1)
        let userPreOrder = {
            order: props.order,
            fullName: props.fullName,
            email: props.email,
            city: props.city,
            address: props.address,
        }

        props.setCurrentUser(userPreOrder)
    }


    return (
        <div>
            <h2 className={styles.title}>Address and Details</h2>
            <div className={styles.underline}>_____________________</div>
            <form className={styles.formContainer} onSubmit={preOrder}>
                <div>
                    <label htmlFor="fullName">Full name</label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Your Full Name"
                        onChange={detectChange}
                        value={props.fullName}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="yourEmail@gmail.de"
                        onChange={detectChange}
                        value={props.email}
                        required />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        value="12345 Berlin"
                        onChange={detectChange}

                        disable="true" />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Mozart Straße 123"
                        onChange={detectChange}
                        value={props.address}
                        required />
                </div>


                <button className={styles.confirmButton}>Confirm</button>




            </form>
        </div>
    )
}

export default AddressAndDetails