import React, { useState } from "react";
import { calcRecipe } from "./data";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css"; // theme
import { ReactTabulator } from "react-tabulator";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Form from "./Form";

const columns = [
  { title: "TYPE", field: "type" },
  { title: "Garlic", field: "garlic" },
  { title: "White/ Yellow Onion", field: "onion" },
  { title: "Ginger", field: "ginger" },
  { title: "Chilli", field: "chilli" },
  { title: "Chinchalok", field: "chinchalok" },
  { title: "Fish Sauce", field: "fishSauce" },
  { title: "Chilli Flakes", field: "chilliFlakes" },
  { title: "Radish", field: "radish" },
  { title: "Carrot", field: "carrot" },
  { title: "Chives", field: "chives" },
  { title: "Spring Onion", field: "springOnion" },
  { title: "Cabbage", field: "cabbage" },
  { title: "Salt", field: "salt" },
  { title: "Sugar", field: "sugar" },
  { title: "Glutinous Rice Flour", field: "riceFlour" },
  { title: "Water", field: "water" },
  { title: "Pumpkin Puree", field: "pumpkin" },
  { title: "Sesame Seeds", field: "sesame" },
];

const App = () => {
  const [keto, setKeto] = useState(0);
  const [original, setOriginal] = useState(0);
  const [data, setData] = useState([]);
  const ketoHandler = (e) => {
    setKeto(e.target.value);
  };
  const originalHandler = (e) => {
    setOriginal(e.target.value);
  };

  const submitHandler = (e) => {
    let props = {
      keto: keto,
      original: original,
    };
    e.preventDefault();
    setData(calcRecipe(props));
    console.log(data);
  };

  return (
    <div>
      <Form />
      <form onSubmit={submitHandler}>
        <TextField
          type="number"
          label="Keto"
          onChange={ketoHandler}
          value={keto}
        />
        <TextField
          type="number"
          label="Original"
          onChange={originalHandler}
          value={original}
        />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <ReactTabulator
        data={data}
        columns={columns}
        tooltips={true}
        layout={"fitData"}
      />
    </div>
  );
};

export default App;

//passing in a list of key value pairs from input (keto: amt, original: amt)
//function that takes for each key value pair,
//keto > find keto key > pass in the values > returns an object with updated calculated values
//pass it back in like in the recipe?
