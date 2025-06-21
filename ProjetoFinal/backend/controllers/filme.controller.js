import Movie from "../models/filme.model.js";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.MONGO_URI;


//Criar filme

export const createMovie = async (req, res) => {
    const {
        titulo,
        diretor,
        ano,
        genero,
        duracao,
        elenco,
        avaliacao,
        classificacao,
        sinopse,
        imagem} = req.body;

    try {
        const movie = new Movie({titulo,
            diretor,
            ano,
            genero,
            duracao,
            elenco,
            avaliacao,
            classificacao,
            sinopse,
            imagem
        });
        
        console.log(`Este é o filme: ${movie.titulo}, ${movie.imagem}, ${movie.diretor}, ${movie.ano}, ${movie.genero}, ${movie.duracao}, ${movie.elenco}, ${movie.avaliacao}, ${movie.classificacao},${movie.sinopse}`);

        await movie.save();

        res.status(201).json(movie);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
        console.error("Erro ao salvar: ", erro.message);
        console.log("Detalhes: ", erro);
    }

    console.log("Corpo da requisição: ", req.body);
}

// listar filmes, pelo titulo

export const getAllMovies = async (req, res) => {
    try {
        const { titulo } = req.query;
        const filtro = titulo ? { titulo: { $regex: titulo, $options: "i" } } : {}; //buscar por titulo
        
        const movies = await Movie.find(filtro);
        res.status(200).json(movies);
    }
    catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar filmes." });
    }
    console.log("Corpo da requisição: ", req.body);
}

// listar filmes por ID

export const getMovieByID = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id);

        if (!movie) return res.status(404).json({ message: "Filme não foi encontrado!" });
        res.status(200).json(movie);
    }
    catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao buscar filme" })
    }
    console.log("Corpo da requisição: ", req.body);
}

// atualizar filmes

export const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });

        if (!movie) return res.status(404).json({ message: "Filme ou série não foi encontrado!" });
        //caso seja encontrado e editado
        res.status(200).json({ message: "Filme ou Série atualizado com sucesso!" })
    }
    catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: "Erro ao editar filme" })
    }
    console.log("Corpo da requisição: ", req.body);
}

// deletar filmes

export const deleteMovie = async (req, res) => {
    console.log("Tentando deletar:", req.params.id);

    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) return res.status(404).json({ message: "Filme ou Série não foi encontrado!" });
        res.status(200).json({ message: "Filme ou série deletado com sucesso!" })
    }
    catch (erro) {
        res.status(500).json({ erro: "Erro ao deletar filme" })
    }
    console.log("Corpo da requisição: ", req.body);
}