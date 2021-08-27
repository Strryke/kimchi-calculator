import React, { useState, useRef } from "react";
import { calcRecipe } from "./data";
import "react-tabulator/lib/styles.css";
import "react-tabulator/css/tabulator_simple.min.css"; // theme
import { ReactTabulator } from "react-tabulator";
import { Button } from "@material-ui/core";
import Form from "./Form";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import "./App.css";
import { Container } from "@material-ui/core";

const columns = [
  { title: "TYPE", field: "type", cssClass: "type", headerSort: false },
  {
    title: "Garlic",
    field: "garlic",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Onion",
    field: "onion",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Ginger",
    field: "ginger",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Chilli",
    field: "chilli",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Chinchalok",
    field: "chinchalok",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Fish Sauce",
    field: "fishSauce",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
    bottomCalcParams: { precision: 1 },
  },
  {
    title: "Chilli Flakes",
    field: "chilliFlakes",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Radish",
    field: "radish",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Carrot",
    field: "carrot",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Chives",
    field: "chives",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Spring Onion",
    field: "springOnion",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Cabbage",
    field: "cabbage",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Salt",
    field: "salt",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Sugar",
    field: "sugar",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Glutinous Rice Flour",
    field: "riceFlour",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Water",
    field: "water",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Pumpkin Puree",
    field: "pumpkin",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
  {
    title: "Sesame Seeds",
    field: "sesame",
    headerVertical: "flip",
    bottomCalc: "sum",
    headerSort: false,
  },
];

const App = () => {
  const [data, setData] = useState([]);
  const print = useRef();

  const submitHandler = (props) => {
    setData(calcRecipe(props));
  };

  return (
    <Container maxWidth="lg">
      <Form onSubmit={submitHandler} />
      <div className="table">
        <ReactTabulator
          width="1000px"
          height="500px"
          data={data}
          columns={columns}
          layout={"fitColumns"}
          ref={print}
        />
      </div>
      <ReactToPrint
        trigger={() => (
          <Button color="primary" variant="contained">
            Print this out!
          </Button>
        )}
        content={() => print.current}
      />
    </Container>
  );
};

export default App;

//passing in a list of key value pairs from input (keto: amt, original: amt)
//function that takes for each key value pair,
//keto > find keto key > pass in the values > returns an object with updated calculated values
//pass it back in like in the recipe?
