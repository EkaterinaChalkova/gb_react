const InputComponent = (props) => {
  return (
    <div className="inputWrapper">
      <input
        className="input"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={props.onKeyDown}
      />
      <button className="button" onClick={props.onClick}>
        Отправить
      </button>
    </div>
  );
};

export default InputComponent;
