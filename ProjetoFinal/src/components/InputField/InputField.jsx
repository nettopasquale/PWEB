export default function InputField({
  label,
  name,
  placeholder,
  type,
  register,
  error,
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-2xl font-bold text-white"
        >
          {label && (
            <label className="text-white font-bold mb-2">{label}</label>
          )}
        </label>
      )}
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
         {...(register && register(name))}
        className="w-full p-3 border rounded-2xl bg-white"
      />
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
