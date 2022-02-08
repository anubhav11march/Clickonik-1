import React, { useState, useEffect } from "react";
import "./Recommend.css";
import axios from "../../utils/axios";
import { NavLink } from "react-router-dom";

function Recommend() {
  const [data, setData] = useState();

  useEffect(() => {
    function GetData() {
      try {
        axios.get(`api/guest/recentblogs`).then((response) => {
          setData(response.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    }

    GetData();
  }, []);
  return (
    <div className="rmd-main">
      <div className="rmd-topic">
        <div className="rmd-th">Related Content </div>
        <div className="rmd-list">
        {data?.slice(0,10).reverse().map((data, id) => {
        return (
          <NavLink
          onClick={()=>window.reload()}
          className="navlink-css"
          to={{pathname:`/particular-blog/${data?._id}`}}
          state={{ blog_id: data?._id }}
          
        >
          <div className="rmd-even" key={id}>{data?.title}</div>
          </NavLink>
        )})}
        </div>
      </div>
      <div className="rmd-content">
        <div className="rmd-th"> Explore Related Content </div>
        {data?.slice(0,5).map((data, id) => {
          return(
          <>
          <NavLink
          onClick={()=>window.reload()}
          className="navlink-css"
          to={{pathname:`/particular-blog/${data?._id}`}}
          state={{ blog_id: data?._id }}
        >
          <div key={id} className="realted-explore-img" >

        <img src={data?.thumbnail} alt="related" className="rmd-img" />
        </div>
        <div className="rmd-ch">{data?.title?.slice(0,30)}</div>
        <div className="rmd-cb">
        {data?.blogText?.slice(0,110)}...more
        </div>
        </NavLink>
        </>
          )
        })}
      </div>
    </div>
  );
}

export default Recommend;
