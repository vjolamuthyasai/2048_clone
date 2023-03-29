import i18n from '../../utils/i18n';
import styles from './scores.scss';
const Scores = (props) => {
  const { index, text, best } = styles;
  const { score, bestScore } = props;
  return (
    <div>
      <div className={index}>
        <p className={styles.score}>
          {i18n.score}
          <em className={text}>{score}</em>
        </p>
        <p className={`${styles.score} ${best}`}>
          {i18n.best}
          <em className={text}>{bestScore}</em>
        </p>
      </div>
    </div>
  );
};

export default Scores;
