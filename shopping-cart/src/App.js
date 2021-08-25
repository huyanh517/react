
import { ProductList } from "./components/ProductList/ProductList";
import { Title } from "./components/Title/Title";
import { CartList } from './components/CartProduct/CartList';


function App() {
  return (
    <div className="container">
      
      <Title />

      <div className="row">
       
        <ProductList />
        
        <CartList />
        
      </div>
    </div>
  );
}

export default App;
