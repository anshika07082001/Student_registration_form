import React from "react";

export type studentProps = {
  formArr: form[];
  setFormArr:React.Dispatch<React.SetStateAction<form[]>>
};

export type form = {
  label: string;
  type: string;
  value: string;
};
