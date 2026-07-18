function Button({ label = "Encrypt", onClick }) {
  return (
    <div className="button-container my-4 flex justify-center">
      <button
        type="button"
        className="encrypt-button rounded-md bg-foreground px-4 py-2 text-background hover:opacity-80"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
