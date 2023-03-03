import { FormControlLabel, TextField, Checkbox, Button } from "@mui/material";
import React from "react";
import { studentProps } from "../Type/type";

var studyArr: any = [];
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
      }
    }
    props.setFormArr([...props.formArr]);
  };
  // Checkbox handler
  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.currentTarget.checked) {
      props.qualification[index].check = true;
      studyArr.push(props.qualification[index].label);
    } else {
      props.qualification[index].check = false;
      studyArr.splice(index, 1);
    }
    props.setQualification([...props.qualification]);
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
      }
    }
    props.setFileArr([...props.fileArr]);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var obj: any;
    if (studyArr.length > 0) {
      props.fileArr.map((item) => {
        props.formArr.map((ele) => {
          if (item.url !== "" && ele.value !== "") {
            item.error = false;
            ele.error = false;
            obj = {
              name: props.formArr[0].value,
              age: props.formArr[1].value,
              qualification: studyArr,
              image: props.fileArr[0].url,
              pdf: props.fileArr[1].value,
            };
          }
          if (item.url === "" && ele.value === "") {
            item.error = true;
            ele.error = true;
          }
        });
      });
      props.setFormObj(obj);
      props.setFileArr([...props.fileArr]);
      props.setFormArr([...props.formArr]);
    } else {
      alert("please select qualification");
    }
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
        <div>
          {props.qualification.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={item.check}
                    onChange={(e) => checkHandler(e, index)}
                  />
                }
                label={item.label}
              />
            );
          })}
        </div>
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
