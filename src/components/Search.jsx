import {useState} from "react"
import { Divider, Input } from 'antd';


function Search(props) {

    const [searchFood, setSearchFood] = useState("");

    const handleSearch = (event) => {
        setSearchFood(event.target.value);
        props.filterFood(event.target.value);
      };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFood} type="text" name="searchFood" onChange={handleSearch} />
    </>
  );
}

export default Search;
