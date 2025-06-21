import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bgImage from "../../../assets/imgs/bg.jpg";

export default function PageLayout({ children }) {
  return (
    <div
      className="relative w-full min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      <div className="relative z-10 ">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
