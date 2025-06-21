import PageLayout from "../../components/PageLayout/PageLayout";
import BotaoAcao from "../../components/BotaoAcao/BotaoAcao";
import ModalFilme from "../../components/ModalFIlme/ModalFilme";
import useBuscar from "../../hooks/useBuscar";

export default function Buscar() {
  //hook de useBuscar, deixar o código limpo
  const {
    busca,
    filmes,
    resultadoBuscado,
    filmeEmEdicao,
    statusEdicao,
    setBusca,
    buscarDetalhesFilmeTMDB,
    abrirModalEditar,
    fecharModal,
    salvarEdicao,
    deletarFilme,
  } = useBuscar();

  return (
    <PageLayout>
      <section className="min-h-screen flex flex-col px-6 py-12 gap-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Buscar Filmes e Séries
        </h1>

        <input
          type="text"
          placeholder="Digite o nome do filme ou série"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full max-w-2xl p-3 rounded-lg bg-white text-black mx-auto"
        />

        {/* resultados */}
        {resultadoBuscado && filmes.length > 0 && (
          <div className="bg-white/60 rounded-lg p-6 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filmes.map((filme) => (
                <div
                  key={`${filme.origem}-${filme._id || filme.id}`}
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => {
                    if (filme.origem === "tmdb") {
                      buscarDetalhesFilmeTMDB(filme);
                    } else {
                    }
                    abrirModalEditar(filme);
                  }}
                >
                  <p className="mt-2 text-center text-white font-bold text-xl">
                    {filme.titulo}
                  </p>
                  <img
                    src={filme.imagem}
                    alt={filme.titulo}
                    className="w-full h-[600px] object-cover rounded shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* nenhum resultado */}
        {resultadoBuscado && filmes.length === 0 && (
          <div className="text-white text-xl text-center space-y-4 mt-8">
            <p>Desculpe, o filme/série não foi encontrado :(</p>
            <div className="flex justify-center">
              <BotaoAcao onClick={() => navigate("/cadastrar")}>
                Quero cadastrar
              </BotaoAcao>
            </div>
          </div>
        )}

        {/* MODAL */}
        {filmeEmEdicao && (
          <ModalFilme
            filme={filmeEmEdicao}
            onClose={fecharModal}
            onSave={salvarEdicao} // passa para o modal
            status={statusEdicao} // usado dentro do modal
            onDelete={deletarFilme} //deletar
          />
        )}
      </section>
    </PageLayout>
  );
}
