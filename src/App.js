import React from "react"
import Header from "./components/Header"


const Bottom = () => {
  return (
    <div className="bottom-line">bottom line</div> 
  )
}

class App extends React.Component {
  helpText = "Help text"

  render(){
    return(<div>
      <Header title="шапка сайта" />    
      <h1>{this.helpText}</h1><input placeholder={this.helpText} onClick={this.InputClick} onMouseOver={this.mouseOver}/>
    <p>{this.helpText === "Help text" ? "Yes": "No"}</p>
    <Bottom />
    </div>)
  }

  inputClick () {
    console.log("Clicked")
  }

  mouseOver () {
    console.log("Mouse Over")
  }
}
//із цього файлу я його експортую
export default App
