import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component{

 state = {
     posts: []
 };

 componentDidMount(){
     axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((reponse)=>this.setState({
             posts: reponse.data
         }))
         .catch((error)=>console.log(error))
 }

 render(){
     let posts = this.state.posts
    if(posts.length === 0){
         return <h1 className='text-center'>Loading...</h1>
    }else{
         return(
             <div className='container'>
                 <ul className='list-group'>
                     {posts.map(post=><li className='list-group-item'>{post.title}</li>)}
                 </ul>
             </div>
         )
    }
 }
}

export default App;
