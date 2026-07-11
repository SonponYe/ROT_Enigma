function InputField({ value, onChange, label = "Enter text to encrypt" }) {
  return (
    <div className="input-field my-2 flex flex-col gap-1">
      <label htmlFor="inputText">{label}</label>
      <input
        type="text"
        id="inputText"
        name="inputText"
        className="rounded-md border border-foreground/30 bg-transparent px-3 py-2"
        placeholder="Type your text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
