import styles from './tips.scss';
const Tips = (props) => {
  const { title, content } = props;
  return (
    <div className={styles.tips}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Tips;
