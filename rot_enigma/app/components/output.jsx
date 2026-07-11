function OutputField({ value = "" }) {
  return (
    <div className="output-field my-2 flex flex-col gap-1">
      <label htmlFor="outputText">Encrypted text:</label>
      <input
        type="text"
        id="outputText"
        name="outputText"
        className="rounded-md border border-foreground/30 bg-foreground/5 px-3 py-2"
        placeholder="Encrypted text will appear here..."
        value={value}
        readOnly
      />
    </div>
  );
}

export default OutputField;
