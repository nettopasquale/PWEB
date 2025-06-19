import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import movieRouters from "./routes/filmes.routes.js";

dotenv.config();

const app = express();
console.log(process.env.PORT);


let corsPermitidos = [
  "http://localhost:5000", //API TMDB
  "http://localhost:5173", //React FrontEnd
  "http://localhost:8080", // Server local (teste)
  "https://milone-flix.vercel.app/" //Produção
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || corsPermitidos.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Não permitido pelo Cors"));
    }
  },
  credentials:true
}


app.use(cors(corsOptions));
// parse requests of content-type - application/json
// limite de 10mb para imagens
app.use(express.json({limit: '10mb'}));
// parse requests of content-type - application/x-www-form-urlencoded
//extender limite de 10mb
app.use(express.urlencoded({ limit: '10mb', extended: true }));

//conexão MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Conectado ao MongoDB!");
} catch (erro) {
  console.error("Erro na conexão com o MongoDB!", erro);
  process.exit(1);
}


app.use("/", movieRouters);

app.use((req, res, next) => {
  console.log("rota acessada: ", req.method, req.originalUrl);
  next();
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
