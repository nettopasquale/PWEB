import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/schema";
import imageCompression from "browser-image-compression";
import axios from "axios";

export default function useCadastrar() {
  const [preview, setPreview] = useState(null); //preview da capa do filme
  const [submitStatus, setSubmitStatus] = useState("idle"); // status inicial, sucesso e erro

  //react hook com yup para controlar os dados do formulário
  const {
    register,
    handleSubmit: onSubmitHookForm,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //handler da mudança de estado da imagem
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1, // máx 1MB
        maxWidthOrHeight: 800, // se o tamanho for maior é redmensionado
        useWebWorker: true, //melhorar performance
      };

      try {
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result); // Imagem comprimida
          setValue("imagem", reader.result); // NOTAR AQUI
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Erro ao comprimir a imagem", error);
      }
    }
  };

  //submit do formulário
  const onSubmit = async (data) => {
    try {
      await axios.post("https://miloneflix.onrender.com/movies", data);
      setSubmitStatus("success"); //muda status pra sucesso
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setSubmitStatus("error"); // muda status pra erro
    }
  };

  //uso do watch de react-hook para controlar a avaliação dos filmes
  const avaliacao = watch("avaliacao");

  const resetarFormulario = () => {
    reset(); // do react-hook-form -> reseta os dados do formulário
    setPreview(null); //reseta a imagem
    setSubmitStatus("idle"); // reseta o status inicial do formulário
  };

  const navigate = useNavigate();
  //voltar para a Home
  const voltarParaHome = () => {
    navigate("/"); // do react-router-dom
  };
  console.log(watch('imagem'));

  return {
    preview,
    register,
    submitStatus,
    avaliacao,
    errors,
    setValue,
    reset,
    onSubmitHookForm,
    setPreview,
    setSubmitStatus,
    onSubmit,
    handleImageChange,
    voltarParaHome,
    resetarFormulario,
  };
}
