
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { DemoButton } from './demo/DemoButton';
import { DemoMainTitle } from './demo/DemoMainTitle';
import { DemoInput } from './demo/DemoInput';
import { DemoArticleItem } from './demo/DemoArticleItem';

function App() {
  return (
    <div className="wrapper-content">
      <Header />

      {/* <DemoButton /> */}
      {/* <DemoMainTitle /> */}
      {/* <DemoInput /> */}
      {/* <DemoArticleItem /> */}
      
      <HomePage />

      <div className="spacing"></div>

      <Footer />
    </div>
  );
}

export default App;
