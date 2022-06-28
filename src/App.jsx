import React , {useState, useEffect} from 'react';
import './App.css';


function App() {

  const fruitsList = ["Banana","Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const [search, setSearch] = useState('')
  const [output, seOutput] = useState(fruitsList)
  
  // useEffect(()=>{
  //   //seOutput([])
  //   // fruitsList.filter(val =>{
  //   //   if(val.toLowerCase().includes(search.toLowerCase())){
  //   //     seOutput(output=> [...output, val])
  //   //   }



  //   //})
  // },[search])



  const searchfruits = (e)=>{
    setSearch(e.target.value)
    const filterList = fruitsList.filter(fruit => fruit.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
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
            output.map((list)=>{
              return(
                       <p key ={list}> {list}</p>
              )
            })
          }
        </div>      
      </div>
  )
}

export default App;
