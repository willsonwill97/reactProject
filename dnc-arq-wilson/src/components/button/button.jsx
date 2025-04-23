 
import './Button.css'
import WhiteArrow from '../../assets/white-arrow.svg'

function button ({ arrow, buttonStyle, children, ...props}) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
          {children} {arrow && <img src={WhiteArrow} />}
        </button>
    )
}

export default button