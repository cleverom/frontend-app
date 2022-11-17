import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);

  const getCustomersData = async () => {
    try {
      const data = await axios.get("https://talent-emma.herokuapp.com/");
      setDatas(data.data)

    } catch (e) {
      console.log(e.response)
    }
  };

  
  useEffect(() => {
    getCustomersData();
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <p>{datas}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my Website
        </a>
      </header>
    </div>
  );
}

export default App;
