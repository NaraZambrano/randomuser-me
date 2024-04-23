import { useState } from 'react'
import axios from 'axios'
import userCard from './components/UserCard';


import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(false);  
  const [results, setResults] = useState([]);
  
  
  const handleClick = () => {
    
    setIsLoading(true);

    axios.get('https://randomuser.me/api/?results=50')

    .then(function(response){
      //console.log(response.data.results)
       setResults(response.data.results);
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function(){
      setIsLoading(false);

    });
    
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h2>PERSON CARD</h2>
        </div>
        <div className='button-container'>
          <button className='recuerst-button 'onClick={handleClick}>Click</button>
        </div>
        {
          isLoading
          ?
            <userCard />
          :
            <div>
              {
                results.map((item,index) =>{
                  return  
                })
              }
            </div>
      }
        
        
        
      </div>
      
      
     
    </>
  )
}

export default App
