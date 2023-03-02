import React from "react";

export type studentProps = {
  formArr: form[];
  setFormArr: React.Dispatch<React.SetStateAction<form[]>>;
  qualification: qualification[];
  setQualification: React.Dispatch<React.SetStateAction<qualification[]>>;
};

export type qualification = {
  label: string;
  checked:boolean
};

export type form = {
  label: string;
  type: string;
  value: string;
};
