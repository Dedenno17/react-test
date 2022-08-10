const InputText = (props) => {
  return (
    <div className="w-full mb-3">
      <label htmlFor={props.id} className="text-slate-100 font-light">
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        id={props.id}
        placeholder={props.label}
        className="w-full px-3 py-3 rounded-md outline-none border-none mt-2"
      />
    </div>
  );
};

export default InputText;
