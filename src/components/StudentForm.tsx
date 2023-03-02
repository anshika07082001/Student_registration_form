import { TextField } from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

const StudentForm = (props: studentProps) => {
  return (
    <div className="form">
      <h2>Student Registration Form</h2>
      {props.formArr.map((item) => {
        return <TextField label={item.label} variant="outlined" fullWidth />;
      })}
    </div>
  );
};

export default StudentForm;
