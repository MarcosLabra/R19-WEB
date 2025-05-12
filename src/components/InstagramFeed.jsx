import styles from './InstagramFeed.module.css';

const InstagramFeed = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://snapwidget.com/embed/1095840"
        className={styles.iframeContainer}
        allowTransparency="true"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
