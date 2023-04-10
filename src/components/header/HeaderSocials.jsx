
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="#linkedIn" target="_blank"><BsLinkedin/></a>
        <a href="#github" target="_black"><FaGithub/></a>
        <a href="#FB" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
