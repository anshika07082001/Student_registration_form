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
          Qualifications:<b>{props.formObj.qualification}</b>
        </p>
        <p>
          Id Proof Uploaded: <b>{props.formObj.pdf}</b>
        </p>
        <img src={props.formObj.image} alt="" />
      </Card>
    </div>
  );
};

export default FormDetails;
