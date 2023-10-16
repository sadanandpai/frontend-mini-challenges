import React, { useState,useEffect } from "react";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import getSymbolFromCurrency from 'currency-symbol-map';
import "./App.css";

const arr = () => {
  let data = localStorage.getItem("expense");
  if (data) return JSON.parse(localStorage.getItem("expense"));
  else return [];
};

const BASE_URL = "https://api.exchangeratesapi.io/latest";

const App = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
const [code, setCode] = useState();
  const [list, setList] = useState(arr);
   const [currencyOptions, setCurrencyOptions] = useState([]);
 const [fromCurrency, setFromCurrency] = useState("EUR");

useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        
        setCode("$");
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);

       
       const code=getSymbolFromCurrency(fromCurrency);
      setCode(code);

      });
  }, [fromCurrency]);


 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name: name,
      amount: amount,
    };
    if (name && amount) {
      setList([...list, newItem]);
     
      setName("");
      setAmount(0);
    }
  };

  React.useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(list));
  }, [list]);

  const reducer = (accumulator, item) => {
    return (accumulator = accumulator + parseInt(item.amount));
  };

  const total = list.reduce(reducer, 0).toFixed(2);

  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  return (
    <div>
      <Header /><br></br>
      <div style={{display:"flex",justifyContent:"center"}}>
      <h4>Currency:</h4>
      <select
        className="select"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{code}{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{code}{total}</p>
        </div>
      </div>
      <h4>Total Monthly Income:</h4>
      <input
        type="text"
        placeholder="Enter Your Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <br></br>
      <h4>Total Balance:{code}{income - total}</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Item</label>
          <input
            type="text"
            placeholder="Enter Item"
            value={name}
            onChange={(e) => {
              if(e.target.value.length<=15)
              setName(e.target.value)
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              if(e.target.value.length<=10)
              setAmount(e.target.value)
            }}
          />
        </div>

        <button className="btn">Add Expense</button>
      </form>
      <div className="list">
        {list.map((item, id) => {
          return (
            <div key={id}>
              <li className={item.amount>0 ? "plus": "minus"}>
                {item.name}
                <span>{code}{(item.amount)}</span>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="delete-btn"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
