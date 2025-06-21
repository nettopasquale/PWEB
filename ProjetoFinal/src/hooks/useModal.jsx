import { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";

export default function useModal(filme, onSave) {
  const [dados, setDados] = useState(filme);
  const [avaliacao, setAvaliacao] = useState(filme.avaliacao || 0);

  useEffect(() => {
    setDados(filme);
    setAvaliacao(filme.avaliacao || 0);
  }, [filme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalvar = () => {
    onSave({ ...dados, avaliacao });
  };

  //handler da mudança de estado da imagem
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const options = {
        maxSizeMB: 1, // máx 1MB
        maxWidthOrHeight: 800, // se o tamanho for maior é redmensionado
        useWebWorker: true, // Melhora performance
      };

      try {
        const compressedFile = await imageCompression(file, options);

        const reader = new FileReader();
        reader.onloadend = () => {
          setDados((prev) => ({
            ...prev,
            imagem: reader.result,
          }));
        };
        reader.readAsDataURL(compressedFile);
      } catch (erro) {
        console.error("Erro ao comprimir imagem:", erro);
      }
    }
  };

  return {
    dados,
    avaliacao,
    setAvaliacao,
    handleChange,
    handleSalvar,
    handleImageChange,
  };
}
