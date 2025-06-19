import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout';
import CardFilme from '../../components/CardFilme/CardFilme';
import ModalFilme from '../../components/ModalFIlme/ModalFilme';
import useFilmes from '../../hooks/useFilmes';

export default function Listar() {
  
    const navigate = useNavigate();
  //voltar para a Home
  const voltarParaHome = () => {
    navigate("/"); // do react-router-dom
  };


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
        {/* status neutro */}
          <div className="bg-white/60 rounded-lg p-4 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Filmes cadastrados no MongoDB */}
              {filmesLocais.map(filme => (
                <CardFilme
                  key={`local-${filme._id}`}
                  titulo={filme.titulo}
                  imagem={filme.imagem}
                  onClick={() => {
                    setFilmeSelecionado(filme)  
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
        
        {/* Tela de erro aqui */}

        {!filmesLocais && !filmesTMDB && (
          <div className="text-center space-y-6 mt-150">
            <h2 className="text-6xl text-white font-bold">
              Algo deu errado. Tente novamente :(
            </h2>
            <button
              className="bg-yellow-400 text-white text-4xl px-9 py-5 rounded font-bold"
              onClick={voltarParaHome}
            >
              Voltar
            </button>
          </div>
        )}

      </section>
      
      {/* Modal */}

    <ModalFilme filme={filmeSelecionado} onClose={()=>setFilmeSelecionado(null)}/>

    </PageLayout>
  )
}
