import Header from "./components/Header";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import Firsat from "./components/Firsat";
import Indirim from "./components/Indirim";
import Referanslar from "./components/Referanslar";
import YeniUrunler from "./components/YeniUrunler";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Featured />
        <Referanslar />
        <Indirim />
        <Firsat />
        <YeniUrunler />
        <Footer />
      </header>
    </div>
  );
}

export default App;
