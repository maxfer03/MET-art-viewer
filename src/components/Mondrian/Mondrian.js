import React from "react";
import "./Mondrian.css";

export const Mondrian = () => {
  return (
    <div>
      <div id="canvas">
        <div id="toprow">
          <div id="bigbox" class="red right"></div>
          <div id="divider1" class="black right"></div>
          <div id="topleftcolumn" class="right">
            <div id="mediumbox"></div>
            <div id="divider2" class="black"></div>
            <div id="mediumbox"></div>
          </div>
        </div>
        <div id="middlerow" class="black"></div>
        <div id="bottomrow">
          <div id="bottomrightcolumn" class="right">
            <div id="tinybox"></div>
            <div id="divider4" class="black"></div>
            <div id="tinybox" class="yellow"></div>
          </div>
          <div id="divider3" class="black right">
            {" "}
          </div>
          <div id="widebox" class="right">
            {" "}
          </div>
          <div id="divider3" class="black right">
            {" "}
          </div>
          <div id="smallbox" class="blue right">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
