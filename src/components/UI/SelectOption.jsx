const SelectOption = (props) => {
  return (
    <div className={props.className}>
      <select
        name={props.name}
        placeholder={props.label}
        className="w-full px-2 py-3 rounded-md outline-none border-none"
        value={props.value}
        onChange={props.onChange}
      >
        <option label={props.label} />
        {props.options.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
