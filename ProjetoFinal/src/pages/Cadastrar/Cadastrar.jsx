import { useState } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import InputField from '../../components/InputField/InputField';
import AvaliacaoEstrelas from '../../components/AvaliacaoEstrelas/AvaliacaoEstrelas';
import BotaoAcao from '../../components/BotaoAcao/BotaoAcao';

export default function Cadastrar() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

  return (
    <PageLayout>
        <section className="w-full min-h-screen px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-left w-full max-w-6xl">
          Cadastrar Filme ou Série
        </h1>

        <form className="w-full max-w-6xl p-8 rounded-lg shadow-lg space-y-8">
          {/* 3 colunas: Esquerda, Meio e Direita*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
            {/* Coluna da Esquerda */}
            <div className="space-y-6">
              <InputField label="Título" name="titulo" placeholder="Ex: E o vento levou"/>
              <InputField label="Diretor" name="diretor" placeholder="Ex: Nolan"/>
              <InputField label="Duração" name="duracao" placeholder="Ex: 120 min" />
              
              <div>
                <label className="block mb-2 text-gray-700 font-bold text-white">Avaliação</label>
                <AvaliacaoEstrelas name="avaliacao" />
              </div>
            </div>

            {/* Coluna do Meio */}
            <div className="space-y-6">
              <InputField label="Ano" name="ano" placeholder="Ex: 1985"/>
              <InputField label="Gênero" name="genero" placeholder="Ex: Drama, Aventura"/>
              <InputField label="Elenco" name="elenco" placeholder="Ex: Jim Carrey, Eddy Murphy"/>
              <InputField label="Classificação" name="classificacao" placeholder="Ex: 12 anos"/>
            </div>

            <div className="space-y-6">
              {/* Upload de imagem - Coluna da Direita*/}
              <div className="flex flex-col items-center justify-center">
                <label className="block mb-2 text-gray-700 font-bold text-white">Capa do Filme</label>
                <div className="w-[252px] h-[411px] flex flex-col items-center justify-between bg-gray-100 border rounded p-4">
                  {/* Mostra a capa no campo */}
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview da Capa"
                      className="w-full h-auto max-h-96 object-contain"
                    />
                  ) : (
                    <span className="text-gray-500 text-sm text-center">Nenhuma imagem selecionada</span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full p-2 mt-4 text-sm border rounded bg-white"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {/* Campo de sinopse */}
          <div className="mt-8">
            <label className="block mb-2 text-gray-700 font-bold text-white">Sinopse</label>
            <textarea
              name="sinopse"
              rows="6"
              className="w-full p-4 border rounded bg-white resize-none"
              placeholder="Digite a sinopse do filme ou série..."
            ></textarea>
          </div>

          {/* Botão de enviar */}
          <div className="w-full flex justify-center mt-8">
            <BotaoAcao>Cadastrar</BotaoAcao>
          </div>
        </form>
      </section>

    </PageLayout>
  )
}
