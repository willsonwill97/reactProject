
import './LoadingSpinner.css'
import LoadingSpinnerGif from '../assets/LoadingSpinnerImg.gif'

function LoadingSpinner() {
    return(
        <div className="d-flex al-center jc-center loading-overlay-container"> 
           <img src={LoadingSpinnerGif} alt="Laoding" height="80px"/>
        </div>
    )
}

export default LoadingSpinner