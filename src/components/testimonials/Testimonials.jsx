import 'swiper/css'
import 'swiper/css/pagination'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus maxime sequi eaque ab ad dolore natus dicta rerum, sit quasi in perspiciatis reprehenderit incidunt aspernatur pariatur illum. Nihil, quia!'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus maxime sequi eaque ab ad dolore natus dicta rerum, sit quasi in perspiciatis reprehenderit incidunt aspernatur pariatur illum. Nihil, quia!'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus maxime sequi eaque ab ad dolore natus dicta rerum, sit quasi in perspiciatis reprehenderit incidunt aspernatur pariatur illum. Nihil, quia!'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus maxime sequi eaque ab ad dolore natus dicta rerum, sit quasi in perspiciatis reprehenderit incidunt aspernatur pariatur illum. Nihil, quia!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client_name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
