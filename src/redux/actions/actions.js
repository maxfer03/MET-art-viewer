import axios from "axios";

export const GET_DEPTS = "GET_DEPTS";
export const SET_CATEGORY = "SET_CATEGORY"
export const GET_ART = "GET_ART";
export const VIEW_DETAIL = "VIEW_DETAIL"
export const GET_DETAIL = "GET_DETAIL"

export const getDepts = () => {
  return (dispatch) => {
    return axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/departments`
      )
      .then((res) => {
        let formattedDepts = []
        
        for(let obj of res.data.departments){
          formattedDepts.push({
            value: obj.departmentId,
            label: obj.displayName
          })
        }

        dispatch({type: GET_DEPTS, payload: formattedDepts })
      });
  };
};

export const setCategory = (id) => {
  return (dispatch) => {
    dispatch({type: SET_CATEGORY, payload: id})
  }
}

export const getArt = (query = 'a', category = 1) => {
  //console.log("got into action");
  return (dispatch) => {
    //console.log("got into dispatch");
    return axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${category}&q=${query}`
      )
      .then((res) => {
        if (res.data.total === 0) {
          alert("invalid");
        } else {
          const truncatedResponse = res.data.objectIDs.slice(0, 40);
          dispatch({ type: GET_ART, payload: truncatedResponse });
        }
      });
  };
};

export const viewDetail = (state) => {
  return (dispatch) => {
    dispatch({type: VIEW_DETAIL, payload: !state})
  }
}

export const getDetail = (id) => {
  return (dispatch) => {
    return axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    .then((res) => {
      const allData = res.data
      const artData = {
        metLink: allData.objectURL,
        actualLocation: allData.repository,
        famous: allData.isHighlight,
        public: allData.isPublicDomain,
        fullImg: allData.primaryImage,
        img: allData.primaryImageSmall,
        dept: allData.department,
        obj: allData.objectName,
        title: allData.title,
        culture: allData.culture,
        date: allData.objectDate,
        artistPrefix:allData.artistPrefix,
        artist: allData.artistDisplayName,
        artistBeginDate: allData.artistBeginDate,
        artistEndDate: allData.artistEndDate,



      }
      dispatch({type: GET_DETAIL, payload: artData})
    })
  }
}


