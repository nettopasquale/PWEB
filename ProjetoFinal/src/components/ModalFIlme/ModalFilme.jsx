import AvaliacaoEstrelas from "../AvaliacaoEstrelas/AvaliacaoEstrelas";
import InputModal from "../InputModal/InputModal";
import useModal from "../../hooks/useModal";

export default function ModalFilme({
  filme,
  onClose,
  onSave,
  onDelete,
  status,
}) {
  if (!filme) return null;

  const {
    dados,
    avaliacao,
    setAvaliacao,
    handleChange,
    handleSalvar,
    handleImageChange,
  } = useModal(filme, onSave);

  const isTMDB = filme.id && typeof filme.id === "number";
  const podeEditar = !isTMDB;

  // Mensagem de sucesso
  if (status === "sucesso") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-white/80 p-8 rounded-lg max-w-xl text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            Filme alterado com sucesso :)
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="bg-green-600 text-white px-4 py-2 rounded font-bold"
            >
              Cadastrar mais
            </button>
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black px-4 py-2 rounded font-bold"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Mensagem de erro
  if (status === "erro") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-white/80 p-8 rounded-lg max-w-xl text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Algo deu errado :(
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSalvar}
              className="bg-green-600 text-white px-4 py-2 rounded font-bold"
            >
              Tentar novamente
            </button>
            <button
              onClick={onClose}
              className="bg-yellow-400 text-black px-4 py-2 rounded font-bold"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  //Pq a API tem a avaliação de 0 a 10, o meu tem de 0 a 5
  const notaFinal = isTMDB ? (avaliacao / 2).toFixed(1) : avaliacao.toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white/50 rounded-lg p-8 max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl text-white font-bold mb-4">
          Detalhes do Filme
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
          <div className="space-y-6">
            <InputModal
              label="Título"
              name="titulo"
              value={dados.titulo || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <InputModal
              label="Diretor"
              name="diretor"
              value={dados.diretor || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <InputModal
              label="Duração"
              name="duracao"
              value={dados.duracao || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <div className="block items-center gap-2">
              <AvaliacaoEstrelas
                nota={avaliacao}
                rating={avaliacao}
                onChange={setAvaliacao}
                readOnly={!podeEditar}
              />
              <span className="text-white text-sm">({notaFinal} / 5)</span>
            </div>
          </div>

          <div className="space-y-6">
            <InputModal
              label="Ano"
              name="ano"
              value={dados.ano || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <InputModal
              label="Gênero"
              name="genero"
              value={dados.genero || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <InputModal
              label="Elenco"
              name="elenco"
              value={dados.elenco || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
            <InputModal
              label="Classificação"
              name="classificacao"
              value={dados.classificacao || ""}
              onChange={handleChange}
              disabled={!podeEditar}
            />
          </div>

          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center">
              <label className="text-white font-bold text-2xl">Capa</label>
              {dados.imagem ? (
                <img
                  src={dados.imagem}
                  alt="Preview da Capa"
                  className="w-full h-auto max-h-96 object-contain rounded"
                />
              ) : (
                <span className="text-white text-sm text-center">
                  Nenhuma imagem selecionada
                </span>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 mt-4 text-sm border rounded bg-white"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-white font-semibold mb-2">Sinopse</label>
          <textarea
            name="sinopse"
            value={dados.sinopse || ""}
            onChange={handleChange}
            disabled={!podeEditar}
            className="w-full h-40 p-2 border rounded resize-none bg-white"
          />
        </div>

        {podeEditar && (
          <div className="mt-8 flex justify-end">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded font-bold"
              onClick={handleSalvar}
            >
              Salvar alterações
            </button>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded font-bold"
              onClick={() => {
                if (confirm("Tem certeza que deseja deletar este filme?")) {
                  onDelete?.(dados);
                }
              }}
            >
              Deletar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
