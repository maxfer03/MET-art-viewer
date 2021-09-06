import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { getArt, setCategory } from "../../redux/actions/actions";

export const CategorySelector = () => {
  const [selected, setSelected] = React.useState(0);
  const dispatch = useDispatch();

  const handleDispatch = (e) => {
    dispatch(setCategory(e.value))
    dispatch(getArt(undefined, e.value))
  } 

  const depts = useSelector((state) => state.depts);
  return (
    <div>
      <div>categories</div>
      <Select options={depts} onChange={(e) => handleDispatch(e)} />
    </div>
  );
};
