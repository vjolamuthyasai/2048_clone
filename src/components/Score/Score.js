import i18n from '../../utils/i18n';
import styles from './scores.scss';
const Score = (props) => {
  const { index, text, best } = styles;
  return (
    <div className={index}>
      <p className={styles.score}>
        {i18n.score}
        <em className={text}>{props.score}</em>
      </p>
      <p className={`${styles.score} ${best}`}>
        {i18n.best}
        <em className={text}>{props.bestscore}</em>
      </p>
    </div>
  );
};

export default Score;
