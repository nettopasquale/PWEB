import PageLayout from "../../components/PageLayout/PageLayout";
import BotaoAcao from "../../components/BotaoAcao/BotaoAcao";
import card1 from '../../../assets/imgs/card1.jpg';
import card2 from '../../../assets/imgs/card2.jpg';
import card3 from '../../../assets/imgs/card3.jpeg';

export default function Home() {
  return (
    <PageLayout>
    <section className="flex flex-col items-center justify-start px-4 py-12 space-y-24">
        
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6">

        {/* 1° Bloco de Texto */}
        <div className="flex-1 text-white space-y-6">
          {/* Bloco de texto */}
            <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight">
                Busque os seus <br />
                filmes e séries <br />
                favoritos.
            </h1>
            <p className="text-2xl">
                Seu catálogo está disponível aqui. <br />
                Sem dificuldades, sem <br />
                complicações.
            </p>
            <BotaoAcao>Buscar</BotaoAcao>

          </div>
          {/* Imagem ao lado */}
          <div className="flex-1 flex justify-center">
            <img
              src={card1}
              alt="Filmes e séries"
              className="max-w-full w-[583px] h-[386px] object-cover rounded-lg shadow-lg"
            />
            </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-6">
        {/* 2° Bloco de Texto */}
        <div className=" text-white space-y-6 ">
            <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight">
                Contribua com a <br />
                comunidade.<br />
                Cadastre novas <br />
                produções.
            </h1>
            <p className="text-2xl">
                Mantenha a sua comunidade atualizada e <br />
                ajude a manter este projeto ativo.
            </p>
            <BotaoAcao>Cadastrar</BotaoAcao>
          </div>
            {/* Imagem ao lado */}
            <div className="flex-1 flex justify-center">
              <img
                src={card2}
                alt="Filmes e séries"
                className="max-w-full w-[583px] h-[386px] object-cover rounded-lg shadow-lg"
              />
            </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* 3° Bloco de Texto */}
          {/* Bloco de texto */}
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold uppercase leading-tight">
                Biblioteca completa<br />
                Filmes para todos os<br />
                momentos.
            </h1>
            <p className="text-2xl">
                Veja todo o catálogo
            </p>
            <BotaoAcao>Listar</BotaoAcao>
          </div>

          {/* Imagem ao lado */}
          <div className="flex-1 flex justify-center">
            <img
              src={card3}
              alt="Filmes e séries"
              className="max-w-full w-[583px] h-[386px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
    </section>
    </PageLayout>
  );
}
// bg-green-700