
import './App.css';
// rcc
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
 //import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  
  render() {
    return (
      <div>
       <Router> 
          <Navbar/>
         < Routes> 
         <Route path="/" element = {<News country = "in" category = "general"/>}/>
         <Route path="/business" element = {<News country = "in" category = "business"/>}/>
         <Route path="/entertainment" element = {<News country = "in" category = "entertainment"/>}/>
         <Route path="/general" element = {<News country = "in" category = "general"/>}/>
         <Route path="/health" element = {<News country = "in" category = "health"/>}/>
         <Route path="/science" element = {<News country = "in" category = "science"/>}/>
         <Route path="/sports" element = {<News country = "in" category = "sports"/>}/>
         <Route path="/technology" element = {<News country = "in" category = "technology"/>}/>
         </Routes>
       </Router> 
      </div>
    )
  }
}
