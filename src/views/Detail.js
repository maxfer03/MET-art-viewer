import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { viewDetail } from "../redux/actions/actions";
import styles from "./Detail.module.css";
import {FaCreativeCommonsPd} from 'react-icons/fa'
import {MdCopyright}from 'react-icons/md'

export const Detail = () => {
  const displayDetail = useSelector((state) => state.displayDetail);
  const artDetail = useSelector((state) => state.artDetail);
  const dispatch = useDispatch();
  return (
    <div
      className={styles.superContainer}
      style={
        displayDetail
          ? {
              visibility: "initial",
              background: "rgba(0, 0, 0, 0.584)",
              boxShadow: "inset 0px 3px 200px rgba(0, 0, 0, 0.811)",
            }
          : { visibility: "hidden",
          background: "rgba(0, 0, 0, 0.0)",
          boxShadow: "inset 0px 3px 200px rgba(0, 0, 0, 0.0)", }
      }
    >
      <div
        className={styles.container}
        style={displayDetail ? { left: "0%" } : { left: "100%" }}
      >
        <button onClick={() => dispatch(viewDetail(displayDetail))}>X</button>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <a target="_blank" href={artDetail.metLink} className={styles.title}>{artDetail.title}</a> {artDetail.famous && <span>(Highlighted)</span>} <span>{artDetail.public? <FaCreativeCommonsPd/> : <MdCopyright/>}</span>
            <div>
              {artDetail.artistPrefix} {artDetail.artist || "Unknown"} ({" "}
              {artDetail.artistBeginDate || "?"} -{" "}
              {artDetail.artistEndDate || "?"} )
            </div>
            <div>You can find it at the {artDetail.actualLocation}</div>
          </div>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={artDetail.img} />
            <a
              target="_blank"
              href={artDetail.fullImg}
              className={styles.imgLink}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};
