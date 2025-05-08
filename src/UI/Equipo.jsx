import React from 'react';
import SectionTitle from '../components/SectionTitle';
import styles from './Equipo.module.css';
import DirectorCard from '../components/DirectorCard';
import EquipoCard from '../components/EquipoCard'; // 👈 FALTABA ESTA LÍNEA
import Mario from '../assets/Mario.png';
import fotoM from '../assets/picPlaceHolderM.png';
import fotoF from '../assets/picPlaceHolderF.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const equipo = [
  { nombre: 'Marcos Labra', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Jennifer Pacheco', rol: 'Facilitador', genero: 'F' },
  { nombre: 'Maximiliano Rojas', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Sergio Arean', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Eduardo Mónaco', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Cinthia De Los Santos', rol: 'Facilitador', genero: 'F' },
  { nombre: 'Ezequiel Ricciardi', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Jeronimo Boragina', rol: 'Facilitador', genero: 'M' },
  { nombre: 'Belén Bustamante', rol: 'Facilitador', genero: 'F' },
];

const Equipo = () => {
  return (
    <section className={styles.container}>
      <SectionTitle
        title="Equipo"
        subtitle="en la región"
        paddingLeft="16px"
      />

      <div className={styles.equipoContainer}>
        <DirectorCard
          image={Mario}
          name="Mario de Paolo"
          subtitle="Coordinador Regional"
          titleColor="#fbfbfb"
          circleColor="#417099"
        />
      </div>

      <div style={{ margin: "24px 0" }}>
        <Swiper
          className={styles.swiperContainer}
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          centeredSlides={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {equipo.map((persona, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <EquipoCard
                nombre={persona.nombre}
                rol={persona.rol}
                foto={persona.genero === 'F' ? fotoF : fotoM}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <SectionTitle
        title="Medios Escolares"
        subtitle=""
        paddingLeft="16px"
      />
      <div className={styles.mediosContainer}>
        <EquipoCard
          nombre={"medios escolares"}
          rol={"facilitador"}
          foto={fotoM}
        />
      </div>

    </section>
  );
};

export default Equipo;
