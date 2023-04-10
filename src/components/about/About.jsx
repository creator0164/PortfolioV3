import ME from '../../assets/me.jpg'
import './about.css'
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbFileCertificate} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years of Programming</small>
              </div>
            </article>
            <article className="about__card">
              <div>
                <TbFileCertificate className='about__icon'/>
                <h5>Certificates</h5>
                <small>10+ Certificates</small>
              </div>
              <div className="about__more">
                  More
              </div>
            </article>
            <article className="about__card">
              <div>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </div>
              <div className="about__more">
                  More
              </div>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem turpis, aliquet sed orci sit amet, aliquam convallis mi. Sed vel mi elementum, tempor lorem commodo, ornare sapien. In convallis quam ac lacus laoreet ultrices. Nunc aliquam elit eget fermentum venenatis. Duis sodales, urna eu aliquet tristique, eros ante porta leo, vitae pharetra dolor eros vel magna. Cras iaculis fringilla fermentum. Praesent ac orci erat. Integer tristique turpis felis, sit amet imperdiet felis egestas a. Nunc sit amet tincidunt est. Donec ut gravida lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
