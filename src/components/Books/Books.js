import React from 'react'
import Book from './Book/Book'

class Books extends React.Component{
    render(){
        return(
            <div>
                {this.props.books.map((book)=>{
                    return <Book
                        changeHandler = {this.props.changeHandler}
                        key={book.id}
                        bookDelete={this.props.bookDelete}
                        book={book}
                    />
                })}
            </div>
        )
    }
}

export default Books;