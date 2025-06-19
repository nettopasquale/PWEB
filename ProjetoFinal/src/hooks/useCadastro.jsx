import { useState } from 'react';
import axios from "axios";

export default function useCadastro() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setValue("imagem", reader.result); // NOTAR AQUI
      };
      reader.readAsDataURL(file);
    }
  };

  //submit do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/movies", formData);
      console.log("Filme cadastrado:", res.data);
      console.log("Dados válidos:", data);
      alert("Filme cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar o filme.");
    }
  };

    const avaliacao = watch("avaliacao");
    
    return {
        handleImageChange,
        handleSubmit,
        avaliacao
    }
}
