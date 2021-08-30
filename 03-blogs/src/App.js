import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
// import { DemoButton } from './demo/DemoButton';
// import { DemoMainTitle } from './demo/DemoMainTitle';
// import { DemoInput } from './demo/DemoInput';
// import { DemoArticleItem } from './demo/DemoArticleItem';

import { Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/Login/LoginPage';
import { RegisterPage } from './pages/Login/RegisterPage';
import { NotFoundPage } from './pages/ErrorPage/NotFoundPage';
import { SearchPage } from './pages/SearchPage/SearchPage';
import { PostDetailPage } from './pages/PostDetailPage/PostDetailPage';


function App() {
  return (

    <div className="wrapper-content">
      <Header />
      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path='/post/:slug'>
          <PostDetailPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>


      <div className="spacing"></div>

      <Footer />
    </div>

  );
}

export default App;
