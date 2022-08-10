
import {useState} from "react"

import './App.css';
import 'antd/dist/antd.min.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodList , setFoodList] = useState(foods)

  const [visibleFoods, setVisibleFoods] = useState(foods);
  
  const [isFormShowing, setIsFormShowing] = useState(false);

  

  const addNewFoodToList = (food) => {
   
    setFoodList ( [...foodList, food])
    setVisibleFoods([...visibleFoods, food])
    
  }  


  const filterFood = (searchFood) => {
    const filterFood = foodList.filter((eachFood) => {
      return eachFood.name.includes(searchFood)
    })
    setVisibleFoods(filterFood)
    


  }

  const deleteFood = (deleteOneFood) => {

    const deleteFood = foodList.filter((eachFood) => {
      return eachFood.name  !== deleteOneFood 
    })
    setVisibleFoods(deleteFood)

  }
 

  
  // const toggleFormShowing = () => {
    
  //   setIsFormShowing(!isFormShowing)
    
  // }

  return (
    <div className="App">
        <h1>IronNutrition</h1>

        <Search filterFood={filterFood}/>

        {/* Iteración 1 */}
        {/* {foodList.map ((eachFood, index) => {
      
          return (
            <div key={eachFood+index}>
              <p>{eachFood.name}</p>
              <img src={eachFood.image} alt="food" width={100} />
            </div>
          )
        })} */}
       {visibleFoods.map ((eachFood, index) => {
      
      return (
          <div key={eachFood+index}>
          <FoodBox eachFood={eachFood} deleteFood={deleteFood} />
          </div>
         )
      })}

    {/* {isFormShowing === true ? <AddFoodForm addNewFoodToList={addNewFoodToList} setIsFormShowing={setIsFormShowing}/> : null } */}
      <AddFoodForm addNewFoodToList={addNewFoodToList}/>
      
       
                  
    </div>
  );
}

export default App;
