import Row from '../Row/Row';
import styles from './board.scss';
const Board = (props) => {
  return (
    <table className={styles.board}>
      <tbody>
        {props.matrix.map((row, index) => (
          <Row row={row} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Board;
