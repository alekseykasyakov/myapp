import React from "react"
import * as ReactDomClient from 'react-dom/client'
//раньше было так:
//import ReactDOM from "react-dom"
import App from './app'
//в цей файлу я його імпортую
const app = ReactDomClient.createRoot(document.getElementById("app"))

app.render(<App />)
//раньше было так:
//const app = document.getElementById("app")
//ReactDOM.render(element, app)