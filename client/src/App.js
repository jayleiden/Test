import React from "react";
import Balance from "./Components/Balance";
import History from "./Components/History";
import AddTransaction from "./Components/AddTransaction";
import { StateProvider } from "./Components/StateContext";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Balance />
        <History />
        <AddTransaction />
      </div>
    </StateProvider>
  );
}

export default App;
