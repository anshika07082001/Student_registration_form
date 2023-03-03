import {
  FormControlLabel,
  TextField,
  Button,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

const StudentForm = (props: studentProps) => {
  // name and age input field handler checks for validation
  const stringInpHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    obj: any,
    index: number
  ) => {
    var val = e.currentTarget.value;
    if (obj.label === props.formArr[index].label) {
      if (val.match(props.formArr[index].regex)) {
        props.formArr[index].value = val;
        props.formArr[index].error = false;
      } else {
        props.formArr[index].error = true;

        props.formArr[index].value = "";
      }
    }
    props.setFormArr([...props.formArr]);
  };
  // radio input handler
  const radioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.formObj.qualification = e.currentTarget.value;
    props.setFormObj({ ...props.formObj });
  };
  // change handler for file input fields checks for validation
  const fileHandler = (e: any, obj: any, index: number) => {
    var url = URL.createObjectURL(e.currentTarget.files[0]);
    var size = e.currentTarget.files[0].size;
    var fType = e.currentTarget.files[0].name;
    var val = e.currentTarget.value;
    var ind = fType.indexOf(".");
    fType = fType.slice(ind + 1, fType.length);
    size = parseInt((size / 1000).toString());
    if (obj.fileType === props.fileArr[index].fileType) {
      if (
        size > props.fileArr[index].min &&
        size < props.fileArr[index].max &&
        fType === props.fileArr[index].fileType
      ) {
        props.fileArr[index].url = url;
        props.fileArr[index].value = val;
        props.fileArr[index].error = false;
      } else {
        props.fileArr[index].error = true;
        props.fileArr[index].value = "";
        props.fileArr[index].url = "";
      }
    }
    props.setFileArr([...props.fileArr]);
  };
  // button handler for submit function
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var obj: any;
    // checks any input field is empty or not
    props.fileArr.forEach((ele) => {
      if (ele.url === "") {
        ele.error = true;
      } else {
        ele.error = false;
      }
    });
    props.formArr.forEach((ele) => {
      if (ele.value === "") {
        ele.error = true;
      } else {
        ele.error = false;
      }
    });
    var fileIndex: any = props.fileArr.findIndex((ele) => ele.url === "");
    var formIndex: any = props.formArr.findIndex((ele) => ele.value === "");
    if (fileIndex === -1 && formIndex === -1) {
      if (props.formObj.qualification !== "") {
        obj = {
          name: props.formArr[0].value,
          age: props.formArr[1].value,
          qualification: props.formObj.qualification,
          image: props.fileArr[0].url,
          pdf: props.fileArr[1].value,
        };
        props.setFormObj(obj);
        localStorage.setItem("studentForm", JSON.stringify(obj));
      } else {
        alert("please select Qualifications");
      }
    }
    props.setFileArr([...props.fileArr]);
    props.setFormArr([...props.formArr]);
  };

  return (
    <div className="form">
      <h2>Student Registration Form</h2>
      <form onSubmit={(e) => submitHandler(e)}>
        {props.formArr.map((item, index) => {
          return (
            <TextField
              key={index}
              error={item.error}
              helperText={item.helperText}
              label={item.label}
              variant="outlined"
              fullWidth
              type={item.type}
              onChange={(e) => stringInpHandler(e, item, index)}
            />
          );
        })}
        <FormLabel id="demo-controlled-radio-buttons-group">
          Qualifications
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          onChange={(e) => radioChange(e)}
        >
          {props.qualification.map((item) => {
            return (
              <FormControlLabel
                value={item.value}
                control={<Radio />}
                label={item.label}
              />
            );
          })}
        </RadioGroup>
        {props.fileArr.map((item, index) => {
          return (
            <TextField
              key={index}
              type={item.type}
              helperText={item.label}
              fullWidth
              error={item.error}
              onChange={(e) => fileHandler(e, item, index)}
            />
          );
        })}
        <Button variant="contained" fullWidth type="submit">
          Submit Form
        </Button>
      </form>
    </div>
  );
};

export default StudentForm;
