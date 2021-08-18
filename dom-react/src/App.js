import './App.css';
import { useState } from 'react';

function App() {
  const [valueEle, setValueEle] = useState("")
  
  const changeInputHandler = event => {
    setValueEle(event.target.value)
  }
  
  return (
    <>
      <input
        type="text"
        id="fullname"
        onChange={changeInputHandler}
      />
      <br />
      <h3>Giá trị User nhập: <span className="text">{valueEle}</span></h3>
    </>
  );
}

export default App;
