import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function useFilmes() {
  const [filmesLocais, setFilmesLocais] = useState([]);
  const [filmesTMDB, setFilmesTMDB] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [erroFilmesLocais, setErroFilmesLocais] = useState(false);
  const [erroFilmesTMDB, setErroFilmesTMDB] = useState(false);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);
  const [filtroSensivelAtivo, setFiltroSensivelAtivo] = useState(true);
  

  const navigate = useNavigate();
  //voltar para a Home
  const voltarParaHome = () => {
    navigate("/"); // do react-router-dom
  };

  // Busca os filmes cadastrados no MongoDB
  useEffect(() => {
    const fetchLocais = async () => {
      try {
        // Ajuste conforme sua rota local
        const res = await axios.get("https://miloneflix.onrender.com/movies");
        setFilmesLocais(res.data);
        setErroFilmesLocais(false);
      } catch (err) {
        console.error("Erro ao buscar filmes locais:", err);
        setErroFilmesLocais(true);
      }
    };
    fetchLocais();
  }, []);

  // Busca filmes da API TMDB (Página principal)
  const fetchTMDB = async () => {
    setIsFetching(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?query=matrix&include_adult=false&api_key=${API_KEY}&language=pt-BR&page=${page}`
      );
      const novosFilmes = res.data.results.map((filme) => ({
        id: filme.id,
        titulo: filme.title,
        overview: filme.overview,
        imagem: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
      }));
      setFilmesTMDB((prev) => {
        //ajudar a prevenir fetchs repetidos
        const idsExistentes = new Set(prev.map((f) => f.id));
        const unicos = novosFilmes.filter((f) => !idsExistentes.has(f.id));
        return [...prev, ...unicos];
      });
      setErroFilmesTMDB(false);
    } catch (err) {
      console.error("Erro ao buscar filmes da TMDB:", err);
      setErroFilmesTMDB(true);
    } finally {
      setIsFetching(false);
    }
  };

  //carrega os detalhes dos filmes apenas no modal
  const fetchDetalhesFilme = async (id) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits`
      );

      const data = res.data;

      const diretor =
        data.credits.crew.find((p) => p.job === "Director")?.name ||
        "Desconhecido";

      const elenco = data.credits.cast
        .slice(0, 5)
        .map((ator) => ator.name)
        .join(", ");

      return {
        id: data.id,
        titulo: data.title,
        ano: data.release_date?.split("-")[0] || "N/A",
        classificacao: data.adult ? "18+" : "Livre",
        duracao: `${data.runtime} min`,
        sinopse: data.overview,
        avaliacao: (data.vote_average / 2).toFixed(1), // de 0 a 5 estrelas
        diretor,
        elenco,
        genero: data.genres.map((g) => g.name).join(", "),
        imagem: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      };
    } catch (err) {
      console.error("Erro ao buscar detalhes do filme:", err);
      return null;
    }
  };

  // Carrega os filmes da API conforme o usuário scrolla
  useEffect(() => {
    fetchTMDB(); // Carrega página inicial

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        if (isVisible && !isFetching) {
          setPage((prevPage) => {
            //prevenir chamadas duplicadas
            if (!isFetching) return prevPage + 1;
            return prevPage;
          });
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isFetching]);

  //carrega nova página ao alterar o numero
  useEffect(() => {
    if (page > 1) fetchTMDB();
  }, [page]);

    //filtrar filmes proibidos
  const palavrasProibidas = [
    "erótico",
    "sensual",
    "softcore",
    "sexo",
    "adulto",
    "nudity",
    "explicit",
    "bedroom",
    "hot",
    "nude",
    "desire",
  ];

  //filtrar os filmes proibidos
  const filmesTMDBFiltrados = filmesTMDB.filter((filme) => {
    const texto = `${filme.titulo}`.toLowerCase();
    return (
      !filtroSensivelAtivo || !palavrasProibidas.some((p) => texto.includes(p))
    );
  });

    //controle de estado de erro ou sucesso das listagens
    const erroTotal = erroFilmesLocais && erroFilmesTMDB;
    const carregandoInicial =
      filmesLocais.length === 0 && filmesTMDB.length === 0 && !erroTotal;

  return {
    filmesLocais,
    filmesTMDB,
    loaderRef,
    filmeSelecionado,
    fetchDetalhesFilme,
    setFilmeSelecionado,
    erroFilmesLocais,
    erroFilmesTMDB,
    filmesTMDBFiltrados,
    voltarParaHome,
    setFiltroSensivelAtivo,
    erroTotal,
    filtroSensivelAtivo,
    carregandoInicial
  };
}
