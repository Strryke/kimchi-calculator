import { useFormik } from "formik";
import { recipe } from "./data";
import { TextField } from "@material-ui/core";

const Form = () => {
  return (
    <>
      {Object.keys(recipe).map((e) => (
        <TextField type="number" label={e} />
      ))}
    </>
  );
};

export default Form;
