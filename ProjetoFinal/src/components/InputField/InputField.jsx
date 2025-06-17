export default function InputField({ label, name, placeholder = "" }) {
    return (
        <div>
          <label htmlFor={name} className="block mb-2 text-gray-700 font-bold text-white">
            {label}
          </label>
          <input
            type="text"
            id={name}
            name={name}
            placeholder={placeholder}
            className="w-full p-3 border rounded-2xl bg-white"
          />
        </div>
        
    )
};