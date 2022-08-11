const TextArea = (props) => {
  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={props.id} className="text-slate-100 font-light mb-3">
        {props.label}
      </label>
      <textarea
        id={props.id}
        cols="20"
        rows="5"
        className="w-full p-3 rounded-md"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
