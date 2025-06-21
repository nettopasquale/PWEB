import mongoose from "mongoose";

const movieModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    diretor: { type: String, required: true },
    ano: { type: Number, required: true },
    genero: { type: String, required: true },
    duracao: { type: String, required: true },
    elenco: { type: String, required: true },
    avaliacao: { type: Number, required: true },
    classificacao: { type: String, required: true },
    sinopse: { type: String, required: true },
    imagem: { type: String},
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieModel);


export default Movie;