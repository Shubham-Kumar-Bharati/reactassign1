import { Component } from "react";
import "./App.css"
import Compoclass from "./components/Compoclass";
import Compofunc from "./components/Compofunc";

class App extends Component{
    state = {
    showClass: false,
    showFunc: false
    }
    render(){
      return(
         <div>
          <h1 className="heading">Styling using Functional and Class Component</h1>
          <button onClick = {() => this.setState({showFunc : !this.state.showFunc}) } className="btn1">To see styling in Functinal Component</button>
          <button onClick = {() => this.setState({showClass : !this.state.showClass}) } className="btn2">To see styling in Class Component</button>
          {this.state.showFunc && <Compofunc/>}
          {this.state.showClass && <Compoclass/>}
         </div>
      )
    }
}

export default App;