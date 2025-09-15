import React from "react";
import { useParams } from "react-router-dom";

// defining type instead of interface
type URLParams = {
  firstname: string;
};

export default function Template() {
  const { firstname } = useParams<URLParams>();
  console.log(firstname);

  return <h1>Hi, my name is {firstname}</h1>;
}
