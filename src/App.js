import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const res = await axios("https://api.adviceslip.com/advice");
      const { advice } = res.data.slip;
      setAdvice(advice);
    } catch (error) {
      console.log("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    getAdvice();
    // const intervalId = setInterval(getAdvice, 100000);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <p>{advice}</p>
        <button onClick={() => getAdvice()}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
