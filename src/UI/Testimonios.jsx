import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./Testimonios.module.css"
import TestimonioCard from '../components/TestimonioCard'

const testimonios = Array.from({ length: 10 }).map((_, index) => ({
  id: index,
  nombre: "Nombre Apellido",
  genero: "F", // o "M"
  testimonio:
    "Lorem ipsum dolor sit amet consectetur. Massa tristique quam felis sit. Turpis venenatis velit massa lectus donec et diam eu.",
}));

const Testimonios = () => {
  return (
    <section className={styles.sectionContainer}>

      <div style={{ margin: '24px 0' }}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonios.map((item) => (
            <SwiperSlide key={item.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <TestimonioCard
                nombre={item.nombre}
                genero={item.genero}
                testimonio={item.testimonio}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonios