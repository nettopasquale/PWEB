
import InputModal from "../InputModal/InputModal";

export default function ModalFilme({ filme, onClose }) {
  if (!filme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Detalhes do Filme</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <InputModal disabled label="Título" value={filme.titulo || ""} />
            <InputModal disabled label="Diretor" value={filme.diretor || ""} />
            <InputModal disabled label="Duração" value={filme.duracao || ""} />
            <InputModal
              disabled
              label="Avaliação"
              value={filme.avaliacao || ""}
            />
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
            <label value={filme.imagem || ""} className="text-gray-500 font-bold text-2xl">Capa</label>
            {filme.imagem ? (
              <img
                src={filme.imagem}
                alt="Preview da Capa"
                className="w-full h-auto max-h-96 object-contain rounded"
              />
            ) : (
              <span className="text-gray-500 text-sm text-center">
                Nenhuma imagem selecionada
              </span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Sinopse
          </label>
          <textarea
            disabled
            value={filme.sinopse || ""}
            className="w-full h-40 p-2 border rounded resize-none"
          />
        </div>
      </div>
    </div>
  );
}
