import Cell from './Cell';

const Row = (props) => {
  return (
    <tr>
      {props.row.map((num, index) => (
        <Cell value={num} key={index} />
      ))}
    </tr>
  );
};

export default Row;
