import React, { useState } from "react";
import FormDetails from "./FormDetails";
import StudentForm from "./StudentForm";

const Main = () => {
  var [formArr, setFormArr] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
      error: false,
      helperText: "*first letter of first and lastname should be capital",
      regex: /^[A-Z][a-z]{0,19}[\s,][A-Z][a-z]{0,19}$/,
    },
    {
      label: "Age",
      type: "number",
      value: "",
      error: false,
      helperText: "*contains only number of two digit",
      regex: /^[0-9]{2}$/,
    },
  ]);
  var [qualification, setQualification] = useState([
    { label: "High School", check: false },
    { label: "Intermediate", check: false },
    { label: "Graduation", check: false },
    { label: "Post Graduation", check: false },
  ]);
  var [fileArr, setFileArr] = useState([
    {
      type: "file",
      label: "Select png file of size 50kb to 200kb",
      min: "50",
      max: "200",
      fileType: "png",
      error: false,
      url: "",
      value: "",
    },
    {
      type: "file",
      label: "Select pdf file of size 100kb to 500kb ",
      min: "100",
      max: "500",
      fileType: "pdf",
      error: false,
      url: "",
      value: "",
    },
  ]);
  var [formObj, setFormObj] = useState({
    name: "",
    age: "",
    qualification: [],
    image: "",
    pdf: "",
  });

  return (
    <div className="container">
      {/* rendering of From Details */}
      {formObj.age !== "" ? (
        <FormDetails formObj={formObj} />
      ) : (
        // Rendering of student form
        <StudentForm
          formArr={formArr}
          setFormArr={setFormArr}
          qualification={qualification}
          setQualification={setQualification}
          fileArr={fileArr}
          setFileArr={setFileArr}
          formObj={formObj}
          setFormObj={setFormObj}
        />
      )}
    </div>
  );
};

export default Main;
