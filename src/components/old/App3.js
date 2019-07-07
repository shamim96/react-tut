import React from 'react';
import './App.css';
import PostForm from './Forms/PostForm'

class App extends React.Component{


 render(){
    return(
        <div className="container">
           <div className="row">
               <div className="col-sm-8 offset-sm-2 mt-3">
                   <PostForm/>
               </div>
           </div>
        </div>
    )
 }
}

export default App;
