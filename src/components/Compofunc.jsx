import React from "react";
import "./Compo.css"
const Compofunc = () => {
    return(
        <div className="box1">
            <h1>This is created using Functional Component</h1>
            <p className="external">This is done using external css</p>
            <p style={{color:"blue"}}>This is done using inline css</p>
        </div>
    )
}

export default Compofunc;