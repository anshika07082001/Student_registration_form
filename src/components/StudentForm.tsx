import { CheckBox } from "@mui/icons-material";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

const StudentForm = (props: studentProps) => {
  return (
    <div className="form">
      <h2>Student Registration Form</h2>
      {props.formArr.map((item) => {
        return <TextField label={item.label} variant="outlined" fullWidth />;
      })}
      <div>
        {props.qualification.map((item) => {
          return <FormControlLabel control={<CheckBox />} label={item.label} />;
        })}
      </div>
    </div>
  );
};

export default StudentForm;
