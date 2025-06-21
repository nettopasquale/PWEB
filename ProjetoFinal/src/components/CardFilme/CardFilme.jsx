export default function CardFilme({ titulo, imagem, onClick }) {
  return (
    <div
      className="bg-white/20 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition"
      onClick={onClick}
    >
      <p className="text-white text-2xl font-bold p-2">{titulo}</p>
      <img
        src={imagem}
        alt={titulo}
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}
