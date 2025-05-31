import './style.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/icon.png'

function Header() {

  return (
    <>
    <header>
        <img src={logo} alt="" />
        <nav>
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Sign up</a>
        </nav>
        <div className='Wrap'>
        <input type="text" placeholder='What are you looking for?' name="" id="" />
        <img src={icon} alt="" />
        </div>
    </header>
    <hr />
    </>
  )
}

export default Header