import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import "./App.css"
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

function App() {
  // we save this state, so can be accessed from the hole application
  const [foodData, setFoodData] = useState([])
  return (
    <div className='App'>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} />
        </InnerContainer>
      </Container> 
    </div>
  );
}

export default App;
