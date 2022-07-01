import React , {useState} from 'react';
import './App.css';

function App() {

  //const fruitsList = ["Banana","Apple", "Orange", "Mango", "Pineapple", "Watermelon"]


    const fruitsList =[
      {  fruit_name : "Apple", source: '/fruits_images/apple.png'},
      {  fruit_name : "Banana", source: '/fruits_images/banana.jpg'},
      {  fruit_name : "Orange", source: '/fruits_images/orange.jpg'},
      {  fruit_name : "Mango", source: '/fruits_images/mango.jpeg'},
      {  fruit_name : "Pineapple", source: '/fruits_images/pineapple.jpg'},
      {  fruit_name : "Watermelon", source: '/fruits_images/watermelon.jpg'}
    ]


  const [search, setSearch] = useState('')
  const [output, seOutput] = useState(fruitsList)
  


  
  const searchfruits = (event)=>{
    setSearch(event.target.value)
    const filterList = fruitsList.filter(fruit => fruit.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
    seOutput(filterList)
  }

  return (

      <div className='App'>
       
       {/* Search Bar */}
        <div>
            Search:<input onChange={searchfruits} type="text" value={search}/>
        </div>

        {/* Output */}
        <div>
          {
            output.map((list, i)=>{
              return(
                       <p key ={i}> 
                          {list.fruit_name} 
                          <img src={list.source}/>
                          <hr/>
                        </p>

                      // <p key={list}>{list}</p>
              )
            })
          }
        </div>      
      </div>
  )
}

export default App;
