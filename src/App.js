
// import Board from './components/Board';
import Game from './components/Game';
import MyNavbar from './components/MyNavbar'
import Home from './components/Home';


import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
export default class App extends Component {
    render() {
        return (
            <Router>
           <MyNavbar />
                <Route name="Tic-Tac-Toc" path="/Tic-Tac-Toc" component={Game}/>
                <Route name="Home" path="/Home" component={Home}/>
            </Router>
        )
    }}

// import Square from './components/Square';
// import Routes from './components/'
// import React, {Component} from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const App = () => <Game />;

// export default App;

// import React, { Component } from 'react'
// import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
// export default class MyRouter extends Component {
//     render() {
//         return (
//             <Router>
//            <MyNavbar />
//                 <Route name="Tic-Tac-Toc" path="/Tic-Tac-Toc" component={Game}/>
//             </Router>
//         )
//     }
// }

// function App(){
// return (
//     <main>
//         <switch>
//             {/* <Route path='/' component={Board} /> */}
//             <Route path='/' component={Game }/>
//             {/* <Route path='/' component={Square} /> */}
            
            
//         </switch>

//     </main>

//     )
// }