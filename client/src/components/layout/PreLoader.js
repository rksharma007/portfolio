import React from "react";

const PreLoader = (props) => {
  return (
  <>
    {/* <section className={props.load ? "spinner" : "spinner-none"}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </section> */}



    {/* <div id={props.load ? "preloader" : "preloader-none"}> </div> */}
    <section className="spinner-bg">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>

  </>
  )
};

export default PreLoader;