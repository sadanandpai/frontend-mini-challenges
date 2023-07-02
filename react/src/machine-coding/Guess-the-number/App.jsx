import React, { useEffect, useState } from 'react'
import './Guess.css'

export default function App()  {
  const[l1,setL1]=useState();
  var flag=true;
  useEffect(()=>{
    setL1(Math.round(100*(Math.random())));
  },[]);
  const [disable, setDisable] = useState(false);
  const[num,setNum]=useState(1);
  const[low,setLow]=useState(false);
  const[high,setHigh]=useState(false);
  const[hi,setHi]=useState(false);
   const help=(e)=>{
    e.preventDefault();
    console.log(l1);
     if(num<l1){
        setLow(true);
        setHigh(false);
     }
     else if(num>l1){
     setHigh(true);
     setLow(false);
     }
     else {
      setHi(true);
      setLow(false);
      setHigh(false);
      setDisable(true);
     }
  
   }
   const Res=()=>{
    setL1(Math.round(100*(Math.random())));
    setHi(false);
    setLow(false);
    setHigh(false);
    setDisable(false);
   }
  return (
    <div className='App'>
     <input placeholder='Guess-Number'onChange={(e)=>setNum(e.target.value)}/>
     <div className='widget'>
     <button onClick={()=>Res()}> Start</button>
     <button onClick={(e)=>help(e)} disabled={disable}>check</button>
     </div>
     <div className='text'>
      {
        low && <p>Less than no</p>
      }
      {
        high && <p>higher than no</p>
      }
      {
        flag && hi && <p>your guess is right </p>
      }
     </div>
    </div>
  )
}

