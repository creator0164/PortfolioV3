import CTA from './CTA'
import ME from '../../assets/test.png';
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kean Ulrich Gozon</h1>
        <h5 className='text-ligth'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
