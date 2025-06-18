import {useState, useRef, useEffect} from 'react'
import PageLayout from '../../components/PageLayout/PageLayout';
import CardFilme from '../../components/CardFilme/CardFilme';
import axios from 'axios';
import ModalFilme from '../../components/ModalFIlme/ModalFilme';
import useFilmes from '../../hooks/useFilmes';

const API_KEY = '0fa3e22c3eb4ba87c594035ed733afa8'; 

export default function Listar() {
  const {
    filmesLocais,
    filmesTMDB,
    loaderRef,
    filmeSelecionado,
    fetchDetalhesFilme,
    setFilmeSelecionado } = useFilmes();

  return (
    <PageLayout>
    <section className="w-full min-h-screen px-6 py-12">
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
        Todos os Filmes e Séries
      </h1>

      <div className="bg-white/60 rounded-lg p-4 md:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* Filmes cadastrados no MongoDB */}
          {filmesLocais.map(filme => (
            <CardFilme
              key={`local-${filme._id}`}
              titulo={filme.titulo}
              imagem={filme.imagemUrl}
              onClick={() => {
                fetchDetalhesFilme(filme.id).then(dados => {
                  if (dados) setFilmeSelecionado(dados);
                });
              }}
            />
          ))}

          {/* Filmes da API TMDB */}
          {filmesTMDB.map(filme => (
            <CardFilme
              key={`tmdb-${filme.id}`}
              titulo={filme.titulo}
              imagem={filme.imagem}
              onClick={() => {
                fetchDetalhesFilme(filme.id).then(dados => {
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
      </section>
      
      {/* Modal */}

    <ModalFilme filme={filmeSelecionado} onClose={()=>setFilmeSelecionado(null)}/>

    </PageLayout>
  )
}
