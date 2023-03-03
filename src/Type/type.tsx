import React from "react";

export type studentProps = {
  formArr: form[];
  setFormArr: React.Dispatch<React.SetStateAction<form[]>>;
  qualification: qualification[];
  setQualification: React.Dispatch<React.SetStateAction<qualification[]>>;
  fileArr: file[];
  setFileArr: React.Dispatch<React.SetStateAction<file[]>>;
  formObj: formObj;
  setFormObj: React.Dispatch<React.SetStateAction<formObj>>;
};

export type formdetailsProps = {
  formObj: formObj;
};

export type qualification = {
  label: string;
  // check: boolean;
  value: string;
};

export type form = {
  label: string;
  type: string;
  value: string;
  error: boolean;
  helperText: string;
  regex: RegExp;
};
export type file = {
  label: string;
  type: string;
  min: string;
  max: string;
  fileType: string;
  error: boolean;
  url: string;
  value: string;
};

export type formObj = {
  name: string;
  age: string;
  qualification: string;
  image: string;
  pdf: string;
};
