import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IndividualInfo } from "./IndividualInfo";
import style from './Display.module.css'
export const Display = () => {

    const artLoaded = useSelector(state => state.artLoaded)
    return(
        <div className={style.superContainer}>
            {
                artLoaded.length > 0 ? 
                artLoaded.map(e => {
                    return (
                        
                        <IndividualInfo id = {e}/>
                    )
                })
                :
                <div>Search</div>
            }
        </div>
    )
}