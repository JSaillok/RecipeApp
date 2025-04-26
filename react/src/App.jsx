import { useState } from 'react'
import Search from './components/Search';
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import "./App.css"
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetails from './components/FoodDetails';

function App() {
  // we save this state, so can be accessed from the hole application
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")
  return (
    <div className='App'>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container> 
    </div>
  );
}

export default App;

// The process of this commit was to make the foodId info be accessible
// for the hole application.
