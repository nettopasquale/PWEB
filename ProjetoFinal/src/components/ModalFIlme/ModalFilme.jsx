import AvaliacaoEstrelas from "../AvaliacaoEstrelas/AvaliacaoEstrelas";
import InputModal from "../InputModal/InputModal";

export default function ModalFilme({ filme, onClose }) {
  if (!filme) return null;

  const isTMDB = filme.id && typeof filme.id === "number";
  //Dividir por 2 pq a avaliação do TMDB é até 10, do meu banco é até 5
  //Se for do meu banco n precisa fazer a divisão
  const avaliacao = isTMDB ? (filme.avaliacao || 0) / 2 : filme.avaliacao || 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white/50 rounded-lg p-8 max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl text-white font-bold mb-4">
          Detalhes do Filme
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <InputModal disabled label="Título" value={filme.titulo || ""} />
            <InputModal disabled label="Diretor" value={filme.diretor || ""} />
            <InputModal disabled label="Duração" value={filme.duracao || ""} />
          <div className="block items-center gap-2">
            <AvaliacaoEstrelas nota={avaliacao} readOnly />
            <span className="text-white text-sm">({avaliacao.toFixed(1)} / 5)</span>
          </div>
          </div>
          <div className="space-y-6">
            <InputModal disabled label="Ano" value={filme.ano || ""} />
            <InputModal disabled label="Gênero" value={filme.genero || ""} />
            <InputModal disabled label="Elenco" value={filme.elenco || ""} />
            <InputModal
              disabled
              label="Classificação"
              value={filme.classificacao || ""}
            />
          </div>

          <div className="space-y-6">
            {/* <InputModal disabled label="Capa" value={filme.imagem || ""} /> */}
            {/* Mostra a capa no campo */}
            <label
              value={filme.imagem || ""}
              className="text-white font-bold text-2xl"
            >
              Capa
            </label>
            {filme.imagem ? (
              <img
                src={filme.imagem}
                alt="Preview da Capa"
                className="w-full h-auto max-h-96 object-contain rounded"
              />
            ) : (
              <span className="text-white text-sm text-center">
                Nenhuma imagem selecionada
              </span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-white font-semibold mb-2">Sinopse</label>
          <textarea
            disabled
            value={filme.sinopse || ""}
            className="w-full h-40 p-2 border rounded resize-none bg-white"
          />
        </div>
      </div>
    </div>
  );
}
