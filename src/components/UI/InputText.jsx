const InputText = (props) => {
  const style = `mb-3 ${props.className}`;

  return (
    <div className={style}>
      <label htmlFor={props.id} className="text-slate-100 font-light">
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        id={props.id}
        placeholder={props.label}
        min={props.min}
        max={props.max}
        className="w-full px-3 py-3 rounded-md outline-none border-none mt-2"
      />
    </div>
  );
};

export default InputText;
