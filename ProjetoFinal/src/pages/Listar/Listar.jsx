import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout/PageLayout";
import CardFilme from "../../components/CardFilme/CardFilme";
import ModalFilme from "../../components/ModalFIlme/ModalFilme";
import useFilmes from "../../hooks/useFilmes";

export default function Listar() {
  //hook que retorna os controles de estado de filmes
  const {
    filmesLocais,
    loaderRef,
    filmeSelecionado,
    filmesTMDBFiltrados,
    fetchDetalhesFilme,
    setFilmeSelecionado,
    voltarParaHome,
    setFiltroSensivelAtivo,
    carregandoInicial,
    erroTotal,
    filtroSensivelAtivo,
  } = useFilmes();

  return (
    <PageLayout>
      <section className="w-full min-h-screen px-6 py-12">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
          Todos os Filmes e Séries
        </h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setFiltroSensivelAtivo((prev) => !prev)}
            className={`px-4 py-2 rounded text-white font-bold text-xl ${
              filtroSensivelAtivo
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {filtroSensivelAtivo
              ? "Filtro ativo (18+ oculto)"
              : "Mostrar todos os conteúdos"}
          </button>
        </div>

        {carregandoInicial && (
          <div className="text-center py-6 text-white">Carregando mais...</div>
        )}

        {/* Tela de erro aqui */}
        {erroTotal && (
          <div className="text-center text-white text-2xl py-16 space-y-4">
            <p>Algo deu errado ao buscar os filmes :(</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Tentar novamente
            </button>
            <button
              onClick={() => voltarParaHome}
              className="bg-yellow-400 text-white px-4 py-2 rounded"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!erroTotal && !carregandoInicial && (
          <div className="bg-white/60 rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Filmes cadastrados no MongoDB */}
              {filmesLocais.map((filme) => (
                <CardFilme
                  key={`local-${filme._id}`}
                  titulo={filme.titulo}
                  imagem={filme.imagem}
                  onClick={() => {
                    setFilmeSelecionado(filme);
                  }}
                />
              ))}

              {/* Filmes da API TMDB */}
              {filmesTMDBFiltrados.map((filme) => (
                <CardFilme
                  key={`tmdb-${filme.id}`}
                  titulo={filme.titulo}
                  imagem={filme.imagem}
                  onClick={() => {
                    fetchDetalhesFilme(filme.id).then((dados) => {
                      if (dados) setFilmeSelecionado(dados);
                    });
                  }}
                />
              ))}
            </div>
            <div ref={loaderRef} className="text-center py-6 text-white">
              Carregando mais...
            </div>
          </div>
        )}
      </section>

      {/* Modal */}
      <ModalFilme
        filme={filmeSelecionado}
        onClose={() => setFilmeSelecionado(null)}
      />
    </PageLayout>
  );
}
