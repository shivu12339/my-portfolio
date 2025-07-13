import { useState } from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </div>
      <Portfolio />
    </>
  );
}
