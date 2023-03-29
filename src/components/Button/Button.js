import './button.scss';

const Button = (props) => {
  const { children, onClick, type, size } = props;
  const sizeCls = `btn-${size}`;
  const typeCls = `btn-${type}`;
  return (
    <button className={`btn-flat ${sizeCls} ${typeCls}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
