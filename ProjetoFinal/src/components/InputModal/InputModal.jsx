export default function InputModal({
  label,
  name,
  value,
  disabled = false,
  onChange,
}) {
  return (
    <div>
      <label className="block text-white font-bold mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        disabled={disabled}
        className="w-full px-3 py-2 border rounded-2xl bg-gray-100"
        onChange={onChange}
      />
    </div>
  );
}
