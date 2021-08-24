import { Provider } from "react-redux";
import { BudgetForm } from "./components/BudgetForm/BudgetForm";
import { BudgetHeader } from "./components/BudgetHeader/BudgetHeader";
import { BudgetList } from "./components/BudgetList/BudgetList";
import store from "./store";

console.log(store.getState())

function App() {
  return (
    <Provider store={store}>
      <BudgetHeader />

      <div className="bottom">
    
        <BudgetForm />

        <BudgetList />
      </div>
    </Provider>
  );
}

export default App;
