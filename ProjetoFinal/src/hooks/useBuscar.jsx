import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function useBuscar() {
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [resultadoBuscado, setResultadoBuscado] = useState(false);
  const [filmeEmEdicao, setFilmeEmEdicao] = useState(null);
  const [statusEdicao, setStatusEdicao] = useState("idle");

  //busca filmes API e Banco
  async function buscarFilmes() {
    setResultadoBuscado(true);

    try {
      //Busca MONGO
      const resLocais = await axios.get(
        `https://miloneflix.onrender.com/movies?titulo=${busca}`
      );

      //busca API
      const resTMDB = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
          busca
        )}`
      );

      //adaptar dos filmes da API
      const filmesApiAdaptados = resTMDB.data.results.map((filme) => ({
        id: filme.id,
        titulo: filme.title,
        overview: filme.overview,
        imagem: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
        origem: "tmdb",
      }));

      //adaptar filmes do MONGO
      const filmesLocais = resLocais.data.map((filme) => ({
        ...filme,
        origem: "local",
      }));

      //juntar os dois arrays
      setFilmes([...filmesLocais, ...filmesApiAdaptados]);
    } catch (error) {
      console.error("Erro ao buscar filmes", error);
      setFilmes([]);
    }
  }

  // detalhar filmes da API de forma mais completa
  // um 2º fetch é mais interessante para não deixar a busca inicial lenta demais

  const buscarDetalhesFilmeTMDB = async (filme) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${filme.id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits`
      );

      const dados = res.data;

      const filmeDetalhado = {
        ...filme,
        diretor:
          dados.credits?.crew?.find((p) => p.job === "Director")?.name || "",
        duracao: `${dados.runtime || 0} min`,
        elenco: dados.credits?.cast
          ?.slice(0, 4)
          .map((a) => a.name)
          .join(", "),
        classificacao: dados.adult ? "18+" : "Livre",
        ano: dados.release_date?.split("-")[0] || "N/A",
        avaliacao: (dados.vote_average / 2).toFixed(1), // de 0 a 5 estrelas
        genero: dados.genres.map((g) => g.name).join(", "),
        sinopse: dados.overview,
      };

      setFilmeEmEdicao(filmeDetalhado);
      setStatusEdicao("idle");
    } catch (err) {
      console.error("Erro ao buscar detalhes da TMDB:", err);
    }
  };

  const abrirModalEditar = (filme) => {
    setFilmeEmEdicao(filme);
    setStatusEdicao("idle");
  };

  const fecharModal = () => {
    setFilmeEmEdicao(null);
  };

  const salvarEdicao = async (dadosEditados) => {
    try {
      await axios.put(
        `https://miloneflix.onrender.com/movies/${dadosEditados._id}`,
        dadosEditados
      );
      setStatusEdicao("sucesso");
    } catch (err) {
      console.error("Erro ao salvar edição:", err);
      setStatusEdicao("erro");
    }
  };


  //deletar o filme do Banco
  const deletarFilme = async (filme) => {
  try {
    await axios.delete(`https://miloneflix.onrender.com/movies/${filme._id}`);
    setStatusEdicao("sucesso");

    // Remove da lista local após deletar
    setFilmes((prev) => prev.filter((f) => f._id !== filme._id));
  } catch (err) {
    console.error("Erro ao deletar filme:", err);
    setStatusEdicao("erro");
  }
};

  //garante a função de buscar filmes seja chamada apos 0.5s
  useEffect(() => {
    const delay = setTimeout(() => {
      if (busca.length > 2) {
        buscarFilmes();
      } else {
        setFilmes([]);
        setResultadoBuscado(false);
      }
    }, 500); // 500ms de debounce

    return () => clearTimeout(delay);
  }, [busca]);

  return {
    busca,
    filmes,
    resultadoBuscado,
    filmeEmEdicao,
    statusEdicao,
    setBusca,
    buscarFilmes,
    buscarDetalhesFilmeTMDB,
    abrirModalEditar,
    fecharModal,
    salvarEdicao,
    deletarFilme
  };
}
