import BotaoAcao from "../../components/BotaoAcao/BotaoAcao";

export default function Cards({
  titulo,
  descricao,
  botaoTexto,
  imagem,
  reverse = false,
  to,
}) {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center justify-between gap-6`}
    >
      {/* Bloco de texto */}
      <div className="flex-1 text-white space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold uppercase leading-tight">
          {titulo}
        </h1>
        <p className="text-2xl">{descricao}</p>
        <BotaoAcao to={to}>{botaoTexto}</BotaoAcao>
      </div>

      {/* Imagem */}
      <div className="flex-1 flex justify-center">
        <img
          src={imagem}
          alt="Poster"
          className="max-w-full w-[583px] h-[386px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
