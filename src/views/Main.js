import React, { useEffect } from "react";
import { CategorySelector } from "../components/CategorySelector/CategorySelector";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Display } from "../components/Display/Display";
import { getDepts } from "../redux/actions/actions";

export const Main = () => {
  return (
    <div style ={{paddingTop: "10vh"}}>
      <Display />
    </div>
  );
};
