import React from 'react'

export const Message = ({msg,bgColor}) => {
  
  let styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: bgColor,
    height: "100px",
    borderRadius:"30px",
    width: "300px",
  }

  let styletext = {
    position: "relative",
    top: "40%",
    left: "25%",
    color: "white",
    borderRadius:"30px",
  }

    return (
    <div style={styles}>
       <p style={styletext}>{msg}</p> 
    </div>
  )
}
