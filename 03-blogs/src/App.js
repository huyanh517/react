
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="wrapper-content">
      <Header />

      <HomePage />
      
      <div className="spacing"></div>

      <Footer />
    </div>
  );
}

export default App;
