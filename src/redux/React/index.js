import React from "react";
import { useDispatch, useSelector } from "react-redux";

const index = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return <div>{state}</div>;
};

export default index;
