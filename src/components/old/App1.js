import React from 'react';
import './App.css';
import Books from './Books/Books'

class App extends React.Component{

    constructor(){
        super();
        console.log("App constructor");
    }

    componentDidMount(){
        console.log("App componentDidMount")
    }
    componentDidUpdate(){
        console.log("App componentDidUpdate")
    }
    componentWillUnmount()
    {
        console.log("App componentWillUnmount");
    }

    state = {
        books: [
            {name:"Html fundamentals",price: 25, id: 1},
            {name:"React Basic",price: 17, id: 2},
            {name:"Php Backend",price: 65, id: 3},
            {name:"Javascript Master",price: 33, id: 4}
        ]
    };

    bookDelete = (id) =>{
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })

    };

    changeHandler = (name, id) =>{
      let newBooks = this.state.books.map(book=>{
         if(book.id === id){
             return{
                 ...book,
                 name
             }
         }
         return book
      });
      this.setState({
          books: newBooks
      })

    };



 render(){
     console.log("App render");

     return (
         <div className="container">
            <Books
                changeHandler = {this.changeHandler.bind(this)}
                bookDelete={this.bookDelete.bind(this)}
                books={this.state.books}
            />

         </div>
     );
 }
}

export default App;
