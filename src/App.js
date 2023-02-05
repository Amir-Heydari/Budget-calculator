import { React, useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";
import Programmer from "./components/Programmer";


const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];

function App() {
  //************State values************/
  const [expenseOne, setExpenses] = useState(initialExpenses);

  // single expense
  const [charge, setCharge] = useState("");

  // single amount
  const [amount, setAmount] = useState("");

  // alert
  const [alert, setAlert] = useState({show:false});

  //edite
  const [edite,setEdit] = useState(false);

  //edite Item
  const [id,setId] = useState(0);

  //************Use effect****************/

    useEffect(()=>{
      console.log('Use effect called');
      localStorage.setItem("expenses", JSON.stringify(expenseOne))},[]
    );

  //************Functionality****************/
  //setCharge
  const handleCharge = (e) => {
    
    setCharge(e.target.value);
  };
  //setAmount
  const handleAmount = (e) => {
   
    setAmount(e.target.value);
  };

  //handle alert
  const handleAlert = ({ type ,text }) => {
    setAlert({show:true,type,text})
    setTimeout(()=>setAlert({show:false}),3000)
  }


  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const singleExpense = {id:uuidv4() , charge , amount};

    if (charge !=='' && amount>0) {

      if (edite) {
        
            let temp = expenseOne.map((item) => {
              return item.id === id ? {...item,charge:charge,amount:amount} : item;
            })

        setExpenses(temp);
        setEdit(false);  
        handleAlert({type:'success' , text:'Item edited'})

      }else{
        
        setExpenses([...expenseOne , singleExpense]);
        handleAlert({type:"success",text:"Item Added"})
      }
      
      setAmount("");
      setCharge("");
      
    } else {
      //handle error
      handleAlert({type:'danger', text:`Charge can't be empty and amount should be bigger then zero`})
    }
  };

  //handle Clear all items
  const clearItems = () => {
    setExpenses([]);
    console.log('all items cleared')
    handleAlert({type:'danger' , text:'All items deleted'})
  };


  //handle single delete
  const deleteItem = (id)=> {
    let tempExpenses = expenseOne.filter((item) => item.id !== id );
    setExpenses(tempExpenses);
    handleAlert({type:'danger' , text:'Item deleted'})
  }


  //handle single edite
  const editeItem = (id)=> {
    const targetItem= expenseOne.find((item) => item.id === id);
    let {charge,amount} = targetItem;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }


  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
 

      <h1>Budget Calculator</h1>

      <main className="App">
        <Form
          chargeOne={charge}
          handleCharge={handleCharge}
          amountOne={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edite={edite}
          
        />

        <List expenseTwo={expenseOne} clearItems={clearItems} deleteItem={deleteItem} editeItem={editeItem}  />
      </main>

      <h1>
        Total :{" "}
        <span className="total">
          {" "}
          $
          {expenseOne.reduce((total, current) => {
            return (total += parseInt(current.amount));
          }, 0)}{" "}
        </span>
      </h1>


      <Programmer />
    </>
  );
}

export default App;
