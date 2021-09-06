import React from "react";
import { CategorySelector } from "../CategorySelector/CategorySelector";
import { SearchBar } from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
export const NavBar = () => {
  return (
    <div className={style.navBarContainer}>
      <div className={style.navBar}>
          MET Visualizer
      </div>
      <div className = {style.searcher}>
        <CategorySelector />
        <SearchBar />
      </div>
    </div>
  );
};
