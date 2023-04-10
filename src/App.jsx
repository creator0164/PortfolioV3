import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import { useState } from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine } from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'
const data = [
  {
    id: 'home',
    name:'#home',
    component: <AiOutlineHome/>
  },
  {
    id: 'about',
    name:'#about',
    component: <AiOutlineUser/>
  },
  {
    id: 'experience',
    name:'#experience',
    component: <BiBook/>
  },
  {
    id: 'services',
    name:'#services',
    component: <RiServiceLine/>
  },
  {
    id: 'contact',
    name:'#contact',
    component: <BiMessageSquareDetail/>
  }
]
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
    const loading =(e)=>{
        setIsLoading(e)
    }
  return (
    <div>
      {
        isLoading && (
          <Loader/>
        )
      }
      <Header/>
      <Nav
      data={data}
      />
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact onButtonClick={loading}/>
      <Footer/>
    </div>
  )
}

export default App
