import express from "express";
import {
    createMovie,
    getAllMovies,
    getMovieByID,
    updateMovie,
    deleteMovie,

} from "../controllers/filme.controller.js";

const movieRouters = express.Router();

movieRouters.get('/movies', getAllMovies);
movieRouters.get('/movies/:id', getMovieByID);
movieRouters.post('/movies', createMovie);
movieRouters.put('/movies/:id', updateMovie);
movieRouters.delete('/movies/:id', deleteMovie);

export default movieRouters;