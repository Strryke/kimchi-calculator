import { useFormik } from "formik";
import { recipe } from "./data";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { Box } from "@material-ui/core";

const Form = (props) => {
  const formik = useFormik({
    initialValues: {
      Original: 0,
      Keto: 0,
      "Strict Keto": 0,
      Strict: 0,
      Vegan: 0,
      "Vegan Keto": 0,
      "Radish Keto": 0,
      "Radish Original": 0,
      Chives: 0,
    },
    onSubmit: (values) => {
      console.log(values);
      props.onSubmit(values);
    },
  });
  const inputProps = {
    step: 0.1,
  };
  const adornments = {
    endAdornment: <InputAdornment position="end">kg</InputAdornment>,
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="input-fields">
        {Object.keys(recipe).map((e) => (
          <TextField
            key={e}
            label={e}
            inputProps={inputProps}
            InputProps={adornments}
            id={e}
            name={e}
            type="number"
            onChange={formik.handleChange}
            value={formik.values.e}
            variant="outlined"
          />
        ))}
      </Box>
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Form;
