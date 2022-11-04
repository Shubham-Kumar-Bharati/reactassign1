import { Component } from "react";
import "./Compo.css"

class Compoclass extends Component{
    render(){
        return(
            <div className="box2">
                <h1>This is created using Class Component</h1>
                <p className="external">This is done using External Css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}

export default Compoclass;