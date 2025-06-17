import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout/PageLayout'
import BotaoAcao from '../../components/BotaoAcao/BotaoAcao';

export default function Buscar() {
    const [busca, setBusca] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [resultadoBuscado, setResultadoBuscado] = useState(false);

    const navigate = useNavigate();

    //alterar aqui
    const filmesFake = [
        { id: 1, titulo: "Matrix" },
        { id: 2, titulo: "O Senhor dos Anéis" },
        { id: 3, titulo: "Interstellar" },
    ];

    function buscarFilmes() {
    const resultados = filmesFake.filter((filme) =>
      filme.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setFilmes(resultados);
    setResultadoBuscado(true);
  }

  return (
      <PageLayout>
          <div className='w-full flex flex-col items-center justify-center gap-4 mt-12 px-4'>
            <h1 className="text-4xl md:text-6xl text-white font-bold">Buscar Filmes e Séries</h1>
            <input
                type="text"
                placeholder="Digite o título do filme ou série..."
                className="w-full max-w-3xl px-6 py-4 rounded-2xl text-black text-lg placeholder-gray-500 shadow-lg bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />
            <BotaoAcao onClick={buscarFilmes}>Buscar</BotaoAcao>

                {resultadoBuscado && (
                    <div className="mt-10 p-6 bg-white/80 rounded-lg w-full max-w-4xl text-black">
                    {filmes.length > 0 ? (
                        <ul className="space-y-2">
                        {filmes.map((filme) => (
                            <li key={filme.id} className="text-xl font-medium">
                            🎬 {filme.titulo}
                            </li>
                        ))}
                        </ul>
                    ) : (
                        <div className="text-center space-y-4">
                        <p className="text-lg font-semibold">Desculpe, o filme/série não foi encontrado:( </p>
                        <BotaoAcao onClick={() => navigate("/cadastrar")}>
                            Quero cadastrar
                        </BotaoAcao>
                        </div>
                    )}
                    </div>
                )}
              
          </div>

    </PageLayout>
  )
}
