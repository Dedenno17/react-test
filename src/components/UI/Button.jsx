const Button = (props) => {
  const style = `px-5 py-3 border-none outline-none font-bold rounded-md ${props.className}`;

  return (
    <button type={props.type} className={style}>
      {props.children}
    </button>
  );
};

export default Button;
