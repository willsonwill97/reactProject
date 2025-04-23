import { useContext } from 'react'
import{ Link } from 'react-router-dom'


//ASSETS 
import './Footer.css'
import brasilIcon from '../../assets/brasil-icon.svg'
import Logo from '../../assets/dnc-logo 2.svg'
import usaIcon from '../../assets/usa-icon.svg'
import facebookIcon from '../../assets/facebook-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import instagranIcon from '../../assets/instagran-icon.svg'
import twitterIcon from '../../assets/twitter-icon.svg'

//  COMPONENT
import Button from '../button/button'

//  CONTEXT
import { AppContext } from '../../contexts/AppContext'

function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
               <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo" />
                        <p className="grey-1-color"> {appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="_blank">
                                <img src={facebookIcon} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={twitterIcon} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={linkedinIcon} />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={instagranIcon} />
                            </a>
                        </div>                  
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                           <h3>{appContext.languages[appContext.language].general.Pages}</h3>
                           <ul>
                                <li> <Link to= "/"> {appContext.languages[appContext.language].menu.Home} </Link></li>
                                <li> <Link to= "/about"> {appContext.languages[appContext.language].menu.about} </Link></li>
                                <li> <Link to= "/projects"> {appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li> <Link to= "/contact"> {appContext.languages[appContext.language].menu.contact} </Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br </p>
                            <p className="grey-1-color">(19) 99187-4342 </p>
                        </div>
                    </div>
             </div>
            <div className="d-flex jc-space-between footer-copy">
                <p className="grey-1-color"> Copyright © DNC - 2024</p>
                <div className="langs-area d-flex">
                    <Button buttonStyle="unstyled" onClick= {() => changeLanguage('br')}>
                        <img src={brasilIcon} height="29px"/>
                    </Button>
                    <Button buttonStyle="unstyled" onClick= {() => changeLanguage('en')}>
                        <img src={usaIcon} height="29px"/>
                    </Button>
                </div>
            </div>            
        </div>
    </footer>
    )
}

export default Footer