import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';

function App() {
  // we save this state, so can be accessed from the hole application
  const [foodData, setFoodData] = useState([])
  return (
    <div className='App'>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
