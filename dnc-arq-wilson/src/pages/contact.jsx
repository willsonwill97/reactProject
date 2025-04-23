import { useContext } from 'react'
import Contactform from "../components/ContactForm/ContactForm"
import Banner from "../components/Banner/banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

//  CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
             <Header  />
            <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg"/>
            <div className="container">
                
                <Contactform />
            </div>
            
            <Footer />
        </>
    )
}

export default Contact

