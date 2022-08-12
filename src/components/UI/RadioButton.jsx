const RadioButton = (props) => {
  return (
    <span className={props.className}>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        className="mr-3"
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className="text-slate-100 font-light mb-3">
        {props.label}
      </label>
    </span>
  );
};

export default RadioButton;
