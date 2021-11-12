import MainNavigation from "../MainNavigation/MainNavigation"
import Footer from "../Footer/Footer"



const Layout = (props) => {
    return (
        <>
        <MainNavigation />
        <main>{props.children}</main>
        <Footer />
        </>
    )
}

export default Layout