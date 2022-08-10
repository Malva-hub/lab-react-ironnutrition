import { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm(props) {
  const [name, setName] = useState('');

  const [image, setImage] = useState('');

  const [calories, setCalories] = useState(0);

  const [servings, setServings] = useState(0);

  const handleNameChange = (event) => {
    let inputValue = event.target.value;
    setName(inputValue);
  };

  const handleImageChange = (event) => {
    let inputValue = event.target.value;
    setImage(inputValue);
  };

  const handleCaloriesChange = (event) =>
    setCalories(Number(event.target.value));

  const handleServingsChange = (event) =>
    setServings(Number(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    const foodToAdd = {
      name,
      image,
      calories,
      servings,
    };
    props.addNewFoodToList(foodToAdd);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);

    props.setIsFormShowing(false);
  };

  return (

    
    <form onSubmit={handleSubmit}>
      
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} name="name" type="text" onChange={handleNameChange} />

      <label>Image</label>
      <Input
        value={image}
        name="image"
        type="text"
        onChange={handleImageChange}
      />

      <label>Calories</label>
      <Input
        value={calories}
        name="calories"
        type="text"
        onChange={handleCaloriesChange}
      />

      <label>Servings</label>
      <Input
        value={servings}
        name="servings"
        type="text"
        onChange={handleServingsChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
