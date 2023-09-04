
import './App.css';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
import { useState } from 'react';
import ListItems from './Components/ListItems';

function App() {

const[input,setInput] = useState("")

function handleInput (event){
  const inputHandle = event.target.value
  setInput(inputHandle)

}
//This state items and items does 2 jobs 1. is handling a click event and 2. is storing Array items from the input 
const [items,setItems] = useState([]);
function AddItems (){
  setItems((prevItems) =>{
    //Here we use []  because we are dealing with arrays on setItems not objects
return[
...prevItems,input
  ];
})
//This is a functions that clears the input by setting back the input to an empty string
//its called inside the AddItems function
setInput("");
}

//Creating a delete function that will be used in ListItems component through props
function deleteItem (id){
  setItems((prevItems) => {
return prevItems.filter((x,index)=>{
return index !== id
})

  })
}


  return (
    <div className="App">
      <div className='card cardcss '>
<HeaderComponent />
<div className='form'>
        <input type='text'
        value={input}
        onChange={handleInput}
 
 />
      <button  type='submit'
      onClick={AddItems}>
        <span><i className='fas fa-feather-alt'/>
        Add</span>
      </button>
      </div>
      <section className='list'>
<ul>
  
  {items.map((list,index) => {
return <ListItems 
key={index}
id={index}
listtext={list}
onDeleted={deleteItem}
/>

  })}
  
</ul>
      </section>
      </div>

     <FooterComponent />
    </div>
  );
}

export default App;
