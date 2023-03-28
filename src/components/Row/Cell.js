import styles from './cell.scss';

const Cell = (props) => {
  const color = `color-${props.value}`;
  return (
    <td>
      <div className={`${styles.cell} ${color}`}>
        <div className={styles.number}>{value || null}</div>
      </div>
    </td>
  );
};

export default Cell;
