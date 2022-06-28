import React , {useState, useEffect} from 'react';
import './App.css';


function App() {

  const fruitsList = ["Banana","Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const [search, setSearch] = useState('')
  const [output, seOutput] = useState([])
  
  useEffect(()=>{
    seOutput([])
    fruitsList.filter(val =>{
      if(val.toLowerCase().includes(search.toLowerCase())){
        seOutput(output=> [...output, val])
      }
    })
  },[search])


  
  return (

      <div className='App'>
       
       {/* Search Bar */}
        <div>
            Search:<input onChange={e =>setSearch(e.target.value)} type="text" />
        </div>

        {/* Output */}
        <div>
          {
            output.map((list,i)=>{
              return(
                       <p key={i}>{list}</p>
              )
            })
          }
        </div>      
      </div>
  )
}

export default App;
