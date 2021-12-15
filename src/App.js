import { Component } from "react";

import Card from "./component/Cards";
import sdata from "./sdata";

class App extends Component {
  render(){
    
    return(
      <>
      <h1 className="heading_style">This is the top 5 Web series</h1>
      {sdata.map((val, index) => {
        return(
          <Card
        imgsrc ={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        /> 
        );
      })}
      </>   
    )
  }
}

export default App;
