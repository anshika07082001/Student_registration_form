import { Card } from "@mui/material";
import React from "react";
import { formdetailsProps } from "../Type/type";

const FormDetails = (props: formdetailsProps) => {
  return (
    <div className="formdetails">
      <h2>Form Details</h2>
      <Card>
        <p>
          Name: <b>{props.formObj.name}</b>
        </p>
        <p>
          Age: <b>{props.formObj.age}</b>
        </p>
        <p>
          Qualifications:
          {Object.values(props.formObj.qualification).map((item) => {
            return <b>{item},</b>;
          })}
        </p>
        <img src={props.formObj.image} alt="" />
        <p>
          Id Proof Uploaded: <b>{props.formObj.pdf}</b>
        </p>
      </Card>
    </div>
  );
};

export default FormDetails;
