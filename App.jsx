import { useState } from 'react'
import'./App.css';


function App (){
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);
  return (
   <>
<div className="App">
     
    <div className= "header">
      <h1> Samosa Selector</h1>
      <h2> Count: {count}</h2>
      <img className= "samosa" src="Single_samosa.png" onClick= {updateCount}/>
    </div>
  <div className="Container">
      <div className=" Upgrade">
        <h3> Double Stuffed 👯‍♀️</h3>
    
    </div>
       <div className=" Upgrade">
          <h3> Party Pack 🎉</h3>
    </div>
       <div className=" Upgrade">
          <h3> Full Feast 👩🏽‍🍳</h3>

       </div>
    <div className=" Upgrade">
          <h3> </h3>

    </div>

  </div>

</div>
   </> 
  )

}

/*function App() {
 
 const [count, setCount]= useState(0)
  
 const { hello } = obj



 function handleCount(){
   setCount(count +1)

 }
 return (
 <Samosa />

 )
/* return (
    <>
      <h1></h1>
      <h2>Count: (count)</h2>
      <button onClick={handleCount}>Set count</button>``
    </>

  )
}*/

export default App
