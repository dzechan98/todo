function Input({ onClick = () => {}, value, onChange = () => {}, inputRef }) {
    return (
        <form className="form mb-10">
            <input
                type="text"
                ref={inputRef}
                value={value}
                placeholder="add task"
                onChange={onChange}
            />
            <button onClick={onClick}>Submit</button>
        </form>
    );
}

export default Input;
