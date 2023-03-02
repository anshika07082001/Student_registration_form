import React, { useState } from "react";
import StudentForm from "./StudentForm";

const Main = () => {
  var [formArr, setFormArr] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
    },
    { label: "Age", type: "text", value: "" },
  ]);
  var [qualification, setQualification] = useState([
    { label: "High School", checked: false },
    { label: "Intermediate", checked: false },
    { label: "Graduation", checked: false },
    { label: "Post Graduation", checked: false },
  ]);
  return (
    <div className="container">
      <StudentForm
        formArr={formArr}
        setFormArr={setFormArr}
        qualification={qualification}
        setQualification={setQualification}
      />
    </div>
  );
};

export default Main;
