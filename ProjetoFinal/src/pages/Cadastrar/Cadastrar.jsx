import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schema/schema";
import PageLayout from "../../components/PageLayout/PageLayout";
import InputField from "../../components/InputField/InputField";
import AvaliacaoEstrelas from "../../components/AvaliacaoEstrelas/AvaliacaoEstrelas";
import BotaoAcao from "../../components/BotaoAcao/BotaoAcao";
import axios from "axios";

export default function Cadastrar() {
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
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8080/movies", data);
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

  return (
    <PageLayout>
      <section className="w-full min-h-screen flex flex-col px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-left w-full max-w-6xl">
          Cadastrar Filme ou Série
        </h1>
        {/* Status neutro ou idle */}
        {submitStatus === "idle" && (
          <form
            className="w-full max-w-6xl p-8 rounded-lg shadow-lg space-y-8"
            onSubmit={onSubmitHookForm(onSubmit)}
          >
            {/* 3 colunas: Esquerda, Meio e Direita*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
              {/* Coluna da Esquerda */}
              <div className="space-y-6">
                <InputField
                  label="Título"
                  name="titulo"
                  placeholder="Ex: E o vento levou"
                  register={register}
                  error={errors.titulo?.message}
                />

                <InputField
                  label="Diretor"
                  name="diretor"
                  placeholder="Ex: Nolan"
                  register={register}
                  error={errors.diretor?.message}
                />

                <InputField
                  label="Duração"
                  name="duracao"
                  placeholder="Ex: 120 min"
                  register={register}
                  error={errors.duracao?.message}
                />

                <div>
                  <label className="block mb-2 text-2xl font-bold text-white">
                    Avaliação
                  </label>

                  <AvaliacaoEstrelas
                    name="avaliacao"
                    nota={avaliacao}
                    onChange={(nota) => setValue("avaliacao", nota)}
                  />
                  {errors.avaliacao && (
                    <p className="text-red-500">{errors.avaliacao?.message}</p>
                  )}
                </div>
              </div>

              {/* Coluna do Meio */}
              <div className="space-y-6">
                <InputField
                  label="Ano"
                  name="ano"
                  placeholder="Ex: 1985"
                  register={register}
                  error={errors.ano?.message}
                />

                <InputField
                  label="Gênero"
                  name="genero"
                  placeholder="Ex: Drama, Aventura"
                  register={register}
                  error={errors.genero?.message}
                />

                <InputField
                  label="Elenco"
                  name="elenco"
                  placeholder="Ex: Jim Carrey, Eddy Murphy"
                  register={register}
                  error={errors.elenco?.message}
                />

                <InputField
                  label="Classificação"
                  name="classificacao"
                  placeholder="Ex: 12 anos"
                  register={register}
                  error={errors.classificacao?.message}
                />
              </div>

              <div className="space-y-6">
                {/* Upload de imagem - Coluna da Direita*/}
                <div className="flex flex-col items-center justify-center">
                  <label className="block mb-2 text-gray-700 font-bold text-white">
                    Capa do Filme
                  </label>
                  <div className="w-[252px] h-[411px] flex flex-col items-center justify-between bg-gray-100 border rounded p-4">
                    {/* Mostra a capa no campo */}
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview da Capa"
                        className="w-full h-auto max-h-96 object-contain"
                      />
                    ) : (
                      <span className="text-gray-500 text-sm text-center">
                        Nenhuma imagem selecionada
                      </span>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 mt-4 text-sm border rounded bg-white"
                    onChange={handleImageChange}
                  />
                  {errors.imagem && (
                    <p className="text-red-500">{errors.imagem.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Campo de sinopse */}
            <div className="mt-8">
              <label className="block mb-2 text-gray-700 font-bold text-white">
                Sinopse
              </label>
              <textarea
                {...register("sinopse")}
                rows="6"
                className="w-full p-4 border rounded bg-white resize-none"
                placeholder="Digite a sinopse do filme ou série..."
              ></textarea>
              {errors.sinopse && (
                <p className="text-red-500">{errors.sinopse.message}</p>
              )}
            </div>

            {/* Botão de enviar */}
            <div className="w-full flex justify-center mt-8">
              <BotaoAcao>Cadastrar</BotaoAcao>
            </div>
          </form>
        )}
        {/* Status de Sucesso */}
        {submitStatus === "success" && (
          <div className="text-center space-y-6 mt-150">
            <h2 className="text-6xl text-white font-bold">
              Filme cadastrado com sucesso :)
            </h2>
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-600 text-white text-4xl px-9 py-5 rounded font-bold"
                onClick={resetarFormulario}
              >
                Cadastrar mais
              </button>
              <button
                className="bg-yellow-400 text-black text-4xl px-9 py-5 rounded font-bold"
                onClick={voltarParaHome}
              >
                Voltar
              </button>
            </div>
          </div>
        )}

        {/* Status de erro */}
        {submitStatus === "error" && (
          <div className="text-center space-y-6 mt-150">
            <h2 className="text-6xl text-white font-bold">
              Algo deu errado. Tente novamente :(
            </h2>
            <button
              className="bg-green-600 text-white text-4xl px-9 py-5 rounded font-bold"
              onClick={resetarFormulario}
            >
              Cadastrar
            </button>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
