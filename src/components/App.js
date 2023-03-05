import './App.css'
import React, { Component } from 'react'
import Header from '../shared/components/layout/Header'
import Footer from '../shared/components/layout/Footer'
import Content from '../shared/components/layout/Content'
import {BrowserRouter as Router, Route, Routes, Redirect} from "react-router-dom";
import Home from './Home/Home';
import Chart from './Chart/Chart';
import Coins from './Coins/Coins';
import Todo from './Todo';

import Pomodoro from './Pomodoro/Timer';

import './App.css'

class App extends Component {
  constructor () {
    super()
  }

 
 render () {
    return (

      <div className='App'>
        <Header title='Welcome to CodeLabs' height="20px" />
          <Content>
            <Router>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/todo" element={<Todo/>}/>
                  <Route exact path="/chart" element={<Chart/>}/>
                  <Route exact path="/coins" element={<Coins/>}/>
                 
                  <Route exact path="/po" element={<Pomodoro/>}/>
              </Routes>
      
          `</Router>
      
           </Content>
        <Footer />
      </div>
    )
  }
}

export default App;
