import React from 'react'

const header = () => {
  return(
    <div
         className="bg-secondary"
          style={{ height:"50px", marginBottom: "0", marginTop: "50px"}}
    >
      <p 
          className="text-center"
          style={{color:"white", lineHeight:"50px"}}>
            Header content
        </p>
      <p
          className="text-right"
          style={{color:"red", lineHeight:"50px"}}>
            Cart
        </p>
      </div>
      )
}
export default Header;
