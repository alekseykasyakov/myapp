import React from "react"
import * as ReactDomClient from 'react-dom/client'
import App from './App'
import './css/main.css'
//в цей файлу я його імпортую
const app = ReactDomClient.createRoot(document.getElementById("app"))

app.render(<App />)
//раньше было так:
//const app = document.getElementById("app")
//ReactDOM.render(element, app)