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
<<<<<<< HEAD
                    <label htmlFor="fullName">Full name:</label>
=======
                    <label htmlFor="fullName">Full name</label>
>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
<<<<<<< HEAD
                        placeholder="Alex Smith"
=======
                        placeholder="Your Full Name"
>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8
                        onChange={detectChange}
                        value={props.fullName}
                        required
                    />
                </div>
                <div>
<<<<<<< HEAD
                    <label htmlFor="email">Email:</label>
=======
                    <label htmlFor="email">Email</label>
>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8
                    <input
                        id="email"
                        name="email"
                        type="email"
<<<<<<< HEAD
                        placeholder="alex.smith@gmail.de"
=======
                        placeholder="yourEmail@gmail.de"
>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8
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
<<<<<<< HEAD
                        value="Berlin"
                        onChange={detectChange}
=======
                        value="12345 Berlin"
                        onChange={detectChange}

>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8
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
<<<<<<< HEAD

=======
>>>>>>> 677f568ed2fb1887f930be452e1a1af6569be5f8


                <button className={styles.confirmButton}>Confirm</button>




            </form>
        </div>
    )
}

export default AddressAndDetails