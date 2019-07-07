import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from  'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Nav from './Routes/Nav';
import Post from './Routes/Post';
class App extends React.Component{


 render(){
    return(
        <BrowserRouter>
            <div className="container">
             <Nav />
               <Switch>
                   <Route exact path="/" render={()=>{
                       return <Home name="Shamim"/>
                   }} />
                   <Route path="/about" component={About} />
                   <Route path="/contact" component={Contact} />
                   <Route path="/post/:postId" component={Post} />
               </Switch>
            </div>
        </BrowserRouter>
    )
 }
}

export default App;
