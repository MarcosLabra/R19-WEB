import styles from './IconCard.module.css';

const IconCard = ({ title, image, link }) => {
  return (
    <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </a>
  );
};

export default IconCard;
