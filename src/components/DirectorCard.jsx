import React from 'react';
import './DirectorCard.module.css'; // estilos en archivo aparte (abajo te paso)

const DirectorCard = ({ image, name, subtitle, titleColor, circleColor }) => {
  // Establecer el color del círculo dinámicamente
  const circleStyle = {
    backgroundColor: circleColor || 'var(--rosa-vibrante)', // Si no se pasa un color, usa el predeterminado
  };

  return (
    <div className="director-card">
      <div className="director-img-wrapper">
        <img src={image} alt={name} className="director-img" />
        <div className="subrayado-circular" style={circleStyle}></div>
      </div>
      <h3 className="director-nombre" style={{ color: titleColor }}>{name}</h3>
      <p className="director-subtitulo">{subtitle}</p>
    </div>
  );
};

export default DirectorCard;
