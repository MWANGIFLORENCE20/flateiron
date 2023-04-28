import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import AddTransactions from "./AddTransaction";
import Transactions from "./Transactions";
import "./App.css";

const URL="http://localhost:8001/transactions"
function App() {
  return (
    <div>
    <Header/>
    <Searchbar/>
    <AddTransactions/>
    <Transactions/>
    </div>
  )
}

export default App;
