import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri'
import './contact.css'
import {useSendEmailMutation } from '../../state/api'
const Contact = (props) => {
  const [sendEmail, { isLoading, isSuccess }] = useSendEmailMutation();
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const datas = {
      site: 'Portfolio V3',
      full_name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };
    sendEmail(datas)
    e.target.name.value =''
    e.target.email.value =''
    e.target.message.value=''

  }
  
  if(isLoading){
    props.onButtonClick(true)
  }
  if(isSuccess){
    props.onButtonClick(false)
  }
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gozon@gmail.com</h5>
            <a href="mailto:gozon@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Kean Ulrich L. Gozon</h5>
            <a href="https//m.me/kean">Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form  onSubmit={handleSubmit} method='post'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email"name='email' placeholder='Your Email' required />
          <textarea  name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
