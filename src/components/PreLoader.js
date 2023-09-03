import React, { useEffect } from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations';

const PreLoader = () => {


  useEffect(()=>{
    preLoaderAnim()
  },[]);
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>JUST</span>
            <span>DO</span>
            <span>IT</span>
        </div>
    </div>   
  )
}

export default PreLoader
