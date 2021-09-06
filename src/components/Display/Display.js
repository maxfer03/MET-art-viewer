import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IndividualInfo } from "./IndividualInfo";
import style from "./Display.module.css";
import "../../styles.css"
import Masonry from "react-masonry-css";
export const Display = () => {
  const artLoaded = useSelector((state) => state.artLoaded);

  const breakpoints = {
      default: 3,
      1100: 2,
      700: 1
  }

  return (
    <div className={style.superContainer}>
      
        {(
          artLoaded.map((e) => {
            return <div className ='images'>
                <IndividualInfo id={e} />
            </div>;
          })
        )}
      
    </div>
  );
};
