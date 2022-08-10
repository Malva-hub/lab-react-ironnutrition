import { useState } from 'react';

import './App.css';
import 'antd/dist/antd.min.css';
import { Row, Divider, Button } from 'antd';

import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [visibleFoods, setVisibleFoods] = useState(foods);

  const [isFormShowing, setIsFormShowing] = useState(false);

  const addNewFoodToList = (food) => {
    setFoodList([...foodList, food]);
    setVisibleFoods([...visibleFoods, food]);
  };

  const filterFood = (searchFood) => {
    const filterFood = foodList.filter((eachFood) => {
      return eachFood.name.includes(searchFood);
    });
    setVisibleFoods(filterFood);
  };

  const deleteFood = (deleteOneFood) => {
    const deleteFoods = visibleFoods.filter((eachFood) => {
      return eachFood.name !== deleteOneFood;
    });
    setVisibleFoods(deleteFoods);
  };

  const toggleFormShowing = () => {
    setIsFormShowing(!isFormShowing);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <Button onClick={toggleFormShowing}>
        {isFormShowing === true ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </Button>

      {isFormShowing === true ? (
        <AddFoodForm
          addNewFoodToList={addNewFoodToList}
          setIsFormShowing={setIsFormShowing}
        />
      ) : null}

      <Search filterFood={filterFood} />

      {/* Iteración 1 */}
      {/* {foodList.map ((eachFood, index) => {
      
          return (
            <div key={eachFood+index}>
              <p>{eachFood.name}</p>
              <img src={eachFood.image} alt="food" width={100} />
            </div>
          )
        })} */}
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {visibleFoods.length === 0 ?  "Oops! There is no more content to show" : 
            visibleFoods.map((eachFood, index) => {
            return (
                <div key={eachFood + index}>
                <FoodBox eachFood={eachFood} deleteFood={deleteFood} />
                </div>
            );
        })}
        </Row>
      
    </div>
  );
}

export default App;
