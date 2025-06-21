import PageLayout from "../../components/PageLayout/PageLayout";
import Cards from "../../components/Cards/Cards";
import card1 from "../../../assets/imgs/card1.jpg";
import card2 from "../../../assets/imgs/card2.jpg";
import card3 from "../../../assets/imgs/card3.jpeg";

export default function Home() {
  return (
    <PageLayout>
      <section className="flex flex-col items-center justify-start px-4 py-12 space-y-24">
        <Cards
          titulo={
            <>
              Busque os seus <br />
              filmes e séries <br />
              favoritos.
            </>
          }
          descricao={
            <>
              Seu catálogo está disponível aqui. <br />
              Sem dificuldades, sem <br />
              complicações.
            </>
          }
          botaoTexto="Buscar"
          imagem={card1}
          to="/buscar"
        />

        <Cards
          titulo={
            <>
              Contribua com a <br />
              comunidade.
              <br />
              Cadastre novas <br />
              produções.
            </>
          }
          descricao={
            <>
              Mantenha a sua comunidade atualizada <br />e ajude a manter este
              projeto ativo.
            </>
          }
          botaoTexto="Cadastrar"
          imagem={card2}
          reverse
          to="/cadastrar"
        />

        <Cards
          titulo={
            <>
              Biblioteca completa <br />
              Filmes para todos os <br />
              momentos.
            </>
          }
          descricao={<>Veja todo o catálogo</>}
          botaoTexto="Listar"
          imagem={card3}
          to="/listar"
        />
      </section>
    </PageLayout>
  );
}
// bg-green-700
