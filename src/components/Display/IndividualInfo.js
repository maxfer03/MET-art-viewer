import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { viewDetail, getDetail } from "../../redux/actions/actions";
import style from "./Display.module.css";

export const IndividualInfo = ({ id }) => {
  const [info, setInfo] = React.useState({
    title: "",
    artist: "",
    img: "",
  });
  const [detailLoading, setDetailLoading] = React.useState(false);
  const dispatch = useDispatch();
  const displayDetail = useSelector((state) => state.displayDetail);

  useEffect(() => {
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
      )
      .then((response) => {
        setInfo({
          ...info,
          title: response.data.title,
          img: response.data.primaryImageSmall,
          artist: response.data.artistDisplayName
        });
      });
  }, [id]);

  const getArtDetail = () => {
    setDetailLoading(true);
    dispatch(getDetail(id));
    dispatch(viewDetail(displayDetail));
    setDetailLoading(false);
  };
  console.log(info.title)
  return (
    <div className={style.container} key={id}>
      {/* <Link to = {`/id/${id}`}></Link> */}
      <div className={style.imageInfoContainer} onClick={() => getArtDetail()}>
        <div className={style.info}>
          <div className={style.title}>{info.title.length > 75? info.title.slice(0, 70) + "..." : info.title }</div>
          <div className={style.artist}>{info.artist}</div>
        </div>
      </div>
      <img
        className={style.img}
        src={info.img}
        
      />
    </div>
  );
};
