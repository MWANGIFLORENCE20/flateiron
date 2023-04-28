import React,{useState,useEffect} from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import AddTransactions from "./AddTransaction";
import Transactions from "./Transactions";
import "./App.css";

const url= "http://localhost:8001/transactions"
function App() {
  

 function handleSubmit(e){
  e.preventDefault()
  console.log("form submited")
 }
 

  return (
    <div>
    <Header/>
    <Searchbar/>
    <AddTransactions onSubmit={handleSubmit} />
    <Transactions />
    </div>
  )
  }


export default App;
