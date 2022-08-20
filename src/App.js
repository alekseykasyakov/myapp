import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/logo512.png"

const Bottom = () => {
  return (
    <div className="bottom-line">bottom line</div> 
  )
}

class App extends React.Component {
  constructor(props){ //ДОЛЖНЫ ПРИНЯТЬ props
    super(props) // обовязкова строчка для состояния
    this.state = {
        helpText: "Help text",
        userData: ""
    }

    this.inputClick = this.inputClick.bind(this)
  }  
 

  render(){
    return(<div>
      <Header title="шапка сайта" />    
      <h1>{this.state.helpText}</h1><input placeholder={this.state.helpText} 
      onChange={event => this.setState({userData : event.target.value})}
      onClick={this.inputClick} 
      onMouseOver={this.mouseOver}/>
      <h2>{this.state.userData}</h2>
    <p>{this.state.helpText === "Help text" ? "Yes": "No"}</p>
    <Image image={logo}/>
    <Bottom />
    </div>)
  }

  inputClick () {
    this.setState({helpText: "Changed"})
    console.log("Clicked")
  }

  mouseOver () {
    console.log("Mouse Over")
  }
}
//із цього файлу я його експортую
export default App
