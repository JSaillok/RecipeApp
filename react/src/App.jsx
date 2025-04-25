import { useState } from 'react'
import Search from './components/Search';

function App() {
  // we save this state, so can be accessed from the hole application
  const [foodData, setFoodData] = useState([])
  return (
    <div className='App'>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}

export default App;
