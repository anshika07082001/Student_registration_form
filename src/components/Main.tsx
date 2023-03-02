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
  var [qualification,setQualification]=useState([{label:'High School'}])
  return (
    <div className="container">
      <StudentForm formArr={formArr} setFormArr={setFormArr} />
    </div>
  );
};

export default Main;
