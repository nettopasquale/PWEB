import { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

export default function useFilmes() {
  const [filmesLocais, setFilmesLocais] = useState([]);
  const [filmesTMDB, setFilmesTMDB] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef(null);

  // Busca os filmes cadastrados no MongoDB
  useEffect(() => {
    const fetchLocais = async () => {
      try {
        // Ajuste conforme sua rota local
        const res = await axios.get("http://localhost:8080/movies");
        setFilmesLocais(res.data);
      } catch (err) {
        console.error("Erro ao buscar filmes locais:", err);
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
        imagem: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
      }));
      setFilmesTMDB((prev) => [...prev, ...novosFilmes]);
    } catch (err) {
      console.error("Erro ao buscar filmes da TMDB:", err);
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

            const diretor = data.credits.crew.find((p) =>
                p.job === "Director")?.name || "Desconhecido";

            const elenco = data.credits.cast.slice(0, 5).map((ator) => ator.name).join(", ");

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
    if (page === 1) fetchTMDB(); // Carrega página inicial

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          setPage((prev) => prev + 1);
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
    
    return {
        filmesLocais,
        filmesTMDB,
        loaderRef,
        filmeSelecionado,
        fetchDetalhesFilme,
        setFilmeSelecionado
  };
}
