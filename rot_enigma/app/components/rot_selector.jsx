function RotSelector({ value, onChange }) {
  return (
    <div className="rot-selector my-2 flex items-center justify-center gap-2">
      <label htmlFor="rotValue">Select ROT value:</label>
      <select
        id="rotValue"
        name="rotValue"
        className="rounded-md border border-foreground/30 bg-background px-2 py-1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value="13">ROT13</option>
        <option value="5">ROT5</option>
        <option value="47">ROT47</option>
      </select>
    </div>
  );
}

export default RotSelector;
